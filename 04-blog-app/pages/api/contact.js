// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDatabase, insertDocument } from "@/utils/db-util";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(402).json({ ok: false, message: "Invalid HTTP Method." });

  // TODO:extract data from body
  let { name, email, message } = req.body;
  // TODO:add simple validation layer
  if (
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  )
    return res.status(422).json({ message: "Invalid input." });

  // TODO:prepare data to store in DB.
  let newMessage = { name, email, message };
  // TODO:connect with DB(mongodb) and store message
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    client.close();
    return res
      .status(500)
      .json({ message: "Connecting to the database failed!" });
  }

  try {
    await insertDocument(client, "messages", newMessage);
    client.close();
  } catch (error) {
    client.close();
    console.log(error);
    return res.status(500).json({ message: "Inserting data failed!" });
  }

  return res.status(201).json({ message: "Message Stored Successfully." });
}
