// import packages
import fs from "fs/promises";
import path from "path";

export async function getData() {
  let filePath = path.join(process.cwd(), "data", "product-data.json");
  let jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);
  return data;
}
