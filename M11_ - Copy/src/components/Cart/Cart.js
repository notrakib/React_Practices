import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const ctxCart = useContext(CartContext);
  const amount = `$${ctxCart.amount.toFixed(2)}`;

  const RemoveHandler = (id) => {
    ctxCart.removeItemHandler(id);
  };

  const AddHandler = (item) => {
    ctxCart.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    fetch("https://availablemeals-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: ctxCart.item,
      }),
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctxCart.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={RemoveHandler.bind(null, item.id)}
          onAdd={AddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isCheckout && cartItems}
      {!isCheckout && (
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{amount}</span>
        </div>
      )}
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.onClose}
        ></Checkout>
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
