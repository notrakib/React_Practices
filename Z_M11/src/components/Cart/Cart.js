import { useContext } from "react";
import CartContext from "../../store/CartContext";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cart = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.cartList.map((item) => {
        return (
          item.amount !== 0 && (
            <CartItems
              key={item.id}
              id={item.id}
              amount={item.amount}
              name={item.name}
              price={item.price}
            ></CartItems>
          )
        );
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cart.total}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
