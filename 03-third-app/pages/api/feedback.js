// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

// @filepath path for our json file
export const filepath = path.join(process.cwd(), "data", "feedback.json");
export async function extractFileData(filepath) {
  let fileData = await fs.readFileSync(filepath);
  let data = JSON.parse(fileData);
  return data;
}

export default async function handler(req, res) {

  if (req.method === "POST") {
    // ?extract body data
    let { email, feedback } = req.body;
    let newFeedback = {
      id: `fb_${Date.now()}_${Math.random() * 100}`,
      email,
      feedback,
    };
    // ? extract data from file
    let arr = await extractFileData(filepath);
    arr.push(newFeedback);
    await fs.writeFileSync(filepath, JSON.stringify(arr));
    return res
      .status(201)
      .json({ ok: true, message: "FeedBack sorted successfully." });
  } else if (req.method === "GET") {
    // * return all data.
    let data = await extractFileData(filepath);
    return res.status(200).json({ ok: true, data, message: "success!" });
  }

  return res.status(402).json({ ok: false, message: "Invalid HTTP Method." });
}
