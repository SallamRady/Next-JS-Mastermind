import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

// declaration..
const db = sql("meals.db");

/**
 * @returns all meals data from sqlite db.
 */
export async function getMeals() {
  // wait 5 s just for test loading page
  // dont try it in your real project.
  //   await new Promise((resolve) => setTimeout(resolve, 5000));

  //   throw an error to test error page
  //   throw new Error("Error in Loading..");

  let meals = await db.prepare("SELECT * FROM meals").all();
  return meals;
}

/**
 * @returns a meal data from sqlite db according slug.
 */
export async function getMeal(slug) {
  let meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return meal;
}

export async function saveMeal(meal) {
  // create a slug using slugify package.
  meal.slug = slugify(meal.title, { lower: true });
  // sanitize user input using xss package.
  meal.instructions = xss(meal.instructions);

  // start deal with image.
  let extention = meal.image.name.split(".").pop();
  let filename = `${meal.slug}_${Date.now()}`;
  meal.slug = filename;
  filename += `.${extention}`;

  let stream = fs.createWriteStream(`public/images/${filename}`);
  let bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error("Save Image is failed.");
    }
    meal.image = `/images/${filename}`;

    db.prepare(
      `
    INSERT INTO meals (title,summary,instructions,creator,creator_email,image,slug) 
    VALUES (@title,@summary,@instructions,@creator,@creator_email,@image,@slug)`
    ).run(meal);
  });
}
