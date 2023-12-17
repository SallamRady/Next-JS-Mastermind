import React from "react";

const DynamicMealsPage = ({ params }) => {
  // declaration...
  let { slug } = params;

  return (
    <main>
      <h1>DynamicMealsPage</h1>
      <p>Slug :- {slug}</p>
    </main>
  );
};

export default DynamicMealsPage;
