import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const totalamount = cartctx.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClass = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartctx.item.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [cartctx.item]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalamount}</span>
    </button>
  );
};

export default HeaderCartButton;
