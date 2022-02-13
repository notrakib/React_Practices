import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const itemRef = useRef("");

  const AddItem = (event) => {
    event.preventDefault();
    const addValue = itemRef.current.value;
    const addAmount = +addValue;

    props.AddItem(addAmount);
  };

  return (
    <form className={classes.form} onSubmit={AddItem}>
      <Input
        ref={itemRef}
        label="Amount"
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
