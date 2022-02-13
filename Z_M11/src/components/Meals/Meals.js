import React from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  console.log(1);
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default React.memo(Meals);
