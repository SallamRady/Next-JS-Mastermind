"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() == "";
}

export async function handleShareMeal(prevState, formData) {
  let meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.creator_email.includes(".") ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.instructions) ||
    !meal.image ||
    meal.image.size == 0
  ) {
    return { message: "Invalid Input." };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
