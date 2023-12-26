// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDatabase, insertDocument } from "@/utils/db-util";

export default async function handler(req, res) {
  // ? simple validation layer
  if (req.method !== "POST")
    return res.status(402).json({ ok: false, message: "Invalid HTTP Method!" });
  // extract data from incomming body & validation.
  let { email } = req.body;
  if (!email || !email.includes("@"))
    return res.status(422).json({ message: "Invalid email address." });

  // ** try connect with mongodb
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Connecting to the database failed!" });
  }
  // ** now insert data
  try {
    await insertDocument(client, "newsletter", { email });
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Inserting data failed!" });
    return;
  }

  return res.status(201).json({ ok: true, message: "success!", email });
}
