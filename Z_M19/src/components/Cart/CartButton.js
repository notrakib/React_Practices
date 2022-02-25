import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { CartShowAction } from "../store/CartShowSlice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cartItem.totalPrice);

  const showCartHandler = (event) => {
    event.preventDefault();
    dispatch(CartShowAction.showCart());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>${totalPrice}</span>
    </button>
  );
};

export default CartButton;
