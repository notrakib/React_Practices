import classes from "./CartItem.module.css";

const ItemAdd = (props) => {
  const addHandler = () => {
    props.onAdd(props.id);
  };

  const removeHandler = () => {
    props.onRemove(props.id);
  };

  return (
    <div className={classes.actions}>
      <button onClick={removeHandler}>-</button>
      <button onClick={addHandler}>+</button>
    </div>
  );
};

export default ItemAdd;
