import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import ItemAdd from "./ItemAdd";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    const selectedItem = props.item.find((items) => items.id === id);
    dispatch(cartAction.removeCart(selectedItem));
  };

  // const removeItemHandler = (id) => {
  //   props.item.filter((items) => {
  //     if (items.id === id) {
  //       const selectedItem = {
  //         id: items.id,
  //         title: items.title,
  //         price: items.price,
  //       };
  //       dispatch(cartAction.removeCart(selectedItem));
  //     }
  //     return null
  //   });
  // };

  const addItemHandler = (id) => {
    const selectedItem = props.item.find((items) => items.id === id);
    dispatch(cartAction.addCart(selectedItem));
  };

  // const addItemHandler = (id) => {
  //   props.item.map((items) => {
  //     if (items.id === id) {
  //       const selectedItem = {
  //         id: items.id,
  //         title: items.title,
  //         price: items.price,
  //       };
  //       dispatch(cartAction.addCart(selectedItem));
  //     }
  //     return null;
  //   });
  // };

  return (
    <div>
      {props.item.map((items) => (
        <li className={classes.item} key={items.id}>
          <header>
            <h3>{items.title}</h3>
            <div className={classes.price}>
              tk {items.total}{" "}
              <span className={classes.itemprice}>(tk {items.price}/item)</span>
            </div>
          </header>
          <div className={classes.details}>
            <div className={classes.quantity}>
              x <span>{items.quantity}</span>
            </div>
            <ItemAdd
              id={items.id}
              onRemove={removeItemHandler}
              onAdd={addItemHandler}
            />
          </div>
        </li>
      ))}
    </div>
  );
};

export default CartItem;
