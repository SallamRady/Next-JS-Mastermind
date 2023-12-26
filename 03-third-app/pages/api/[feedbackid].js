import { extractFileData, filepath } from "./feedback";

export default async function handler(req, res) {
  let data = await extractFileData(filepath);
  let { feedbackid } = req.query;
  let feedback = data?.filter((ele) => ele.id == feedbackid)[0];
  if (!feedback)
    return res.status(404).json({ ok: false, message: "Not found" });

  return res
    .status(200)
    .json({ ok: true, feedback, message: "success!" });
}
