import sql from "better-sqlite3";

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
