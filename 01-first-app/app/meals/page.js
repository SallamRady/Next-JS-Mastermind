import MealsGrid from "@/components/meals/MealsGrid/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import LoadingPage from "./loading-out";


// page meta data.
export const metadata = {
  title: "All meals",
  description: "Browse the delicious meals shared by our vibrant communites.",
};

// function return meals grid after loading
async function Meals() {
  // declaration...
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

function MealsPage() {
  // return our view
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
