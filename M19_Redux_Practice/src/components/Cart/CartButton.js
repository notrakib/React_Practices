import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemnumber = useSelector((state) => state.cart.totalQuantity);

  const showCartHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemnumber}</span>
    </button>
  );
};

export default CartButton;
