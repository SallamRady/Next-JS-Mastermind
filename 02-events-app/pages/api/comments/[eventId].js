import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "@/utils/db-util";

export default async function handler(req, res) {
  let { eventId } = req.query;
  // * try to connect with mongodb
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Connecting to the database failed!" });
  }

  if (req.method == "POST") {
    // * create comment
    let { email, name, text } = req.body;
    let comment = { email, name, text, eventId };
    // add validation layer
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      client.close();
      return res.status(422).json({ message: "Invalid input." });
    }
    try {
      let result = await insertDocument(client, "comments", comment);
      comment._id = result.insertedId;
      client.close();
      return res
        .status(201)
        .json({ message: "Added comment.", comment: comment });
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Inserting comment failed!" });
    }
  } else if (req.method == "GET") {
    // * return event commets
    try {
      let documents = await getAllDocuments(client, "comments", {
        eventId: -1,
      });
      client.close();
      documents = documents?.filter((ele) => ele?.eventId == eventId);
      return res.status(200).json({ comments: documents });
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Getting comments failed." });
    }
  }
  client.close();
  return res.status(402).json({ ok: false, message: "Invalid HTTP Method!" });
}
