import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useCallback, useEffect, useState } from "react";

const AvailableMeals = () => {
  const [loadMeals, setloadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const DUMMY_MEALS = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://availablemeals-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setloadedMeals(loadedMeals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    DUMMY_MEALS();
  }, [DUMMY_MEALS]);

  let mealsList = <p></p>;

  if (loadMeals.length > 0) {
    mealsList = loadMeals.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  if (error) {
    mealsList = <p>{error}</p>;
  }

  if (isLoading) {
    mealsList = <p>Meals are Loading</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
