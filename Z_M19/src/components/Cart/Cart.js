import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cartItem);
  return (
    <Card className={classes.cart}>
      <h2>
        Your Shopping Cart <p>Total Cost ${cartItem.totalPrice}</p>
      </h2>
      <ul>
        {cartItem.item.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              amount: item.amount,
              total: item.total,
              price: item.price,
            }}
          ></CartItem>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
