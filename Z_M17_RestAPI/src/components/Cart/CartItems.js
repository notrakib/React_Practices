import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

const CartItems = (props) => {
  const cart = useContext(CartContext);

  const addOnCart = () => {
    cart.add(props.id);
  };

  const removeOnCart = () => {
    cart.remove(props.id);
  };

  return (
    <div key={props.id}>
      <li>
        {props.name} {"X" + props.amount}
      </li>
      <li>{props.price}</li>
      <button onClick={addOnCart}>Add</button>
      <button onClick={removeOnCart}>Remove</button>
    </div>
  );
};

export default CartItems;
