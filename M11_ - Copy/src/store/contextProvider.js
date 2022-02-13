import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  item: [],
  amount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedTotalAmount =
      state.amount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.item[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      amount: updatedTotalAmount,
    };
  }

  if (action.type === "Remove") {
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.item[existingCartItemIndex];
    const updatedTotalAmount = state.amount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.item.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      item: updatedItems,
      amount: updatedTotalAmount,
    };
  }
};

const ContextProvider = (props) => {
  const [state, dispatcher] = useReducer(CartReducer, defaultState);

  const AddItemHandler = (item) => {
    dispatcher({ type: "Add", item: item });
  };

  const RemoveItemHandler = (id) => {
    dispatcher({ type: "Remove", id: id });
  };

  const cntxtprovider = {
    item: state.item,
    amount: state.amount,
    addItem: AddItemHandler,
    removeItemHandler: RemoveItemHandler,
  };

  return (
    <CartContext.Provider value={cntxtprovider}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
