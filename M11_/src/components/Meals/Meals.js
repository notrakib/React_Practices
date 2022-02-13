import { useState } from "react";
import HeaderCartButton from "../Layout/HeaderCartButton";
import Card from "../UI/Card";

const Meals = (props) => {

  const Adding = (foodId) => {
    console.log(props.food.foodId);
    for (const food of props.food) {
      if (food.id === foodId) {
        food.add = +1;
      }
      return food.add;
    }
  };
  return (
    <Card>
      <ul>
        {props.food.map((food) => (
          <li key={food.id}>
            Food = {food.fooditem} || Food Type = {food.type} || Price =
            {food.price}
            <HeaderCartButton onClick={Adding}>Add</HeaderCartButton>
            <p>Amount = {food.add}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Meals;
