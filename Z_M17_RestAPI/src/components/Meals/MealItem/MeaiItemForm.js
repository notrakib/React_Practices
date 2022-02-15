import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cart = useContext(CartContext);

  const addOnCart = (event) => {
    event.preventDefault();
    cart.add(props.id);
  };

  return (
    <form key={props.id} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addOnCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
