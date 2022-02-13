import Meals from "./Meals";

const Food = [
  { id: "a1", fooditem: "Burger", type: "Junk", price: 100, add: 0 },
  { id: "a2", fooditem: "Banana", type: "Fruit", price: 200, add: 0 },
  { id: "a3", fooditem: "Biscuit", type: "Bread", price: 300, add: 0 },
];

const MealsSummary = () => {
  return <Meals food={Food}></Meals>;
};

export default MealsSummary;
