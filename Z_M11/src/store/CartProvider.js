import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  list: [
    {
      id: "m1",
      name: "Sushi Bowl",
      amount: 0,
      price: 11.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      amount: 0,
      price: 18.99,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      amount: 0,
      price: 5.5,
    },
    {
      id: "m4",
      name: "Green Bowl",
      amount: 0,
      price: 15.99,
    },
  ],
  total: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 1) {
    const filter = state.list.filter((item) => item.id === action.id);
    const anti_filter = state.list.filter((item) => item.id !== action.id); //This Method will change the list index
    const updatedItem = { ...filter[0], amount: filter[0].amount + 1 };
    const updatedList = anti_filter.concat(updatedItem);
    const updatedItemIndex = state.list.findIndex(
      (item) => item.id === action.id
    );
    state.total += state.list[updatedItemIndex].price;
    return { list: updatedList, total: +state.total.toFixed(2) };
  }

  if (action.type === 2) {
    const filter = state.list.filter((item) => item.id === action.id);
    const anti_filter = state.list.filter((item) => item.id !== action.id); //This Method will change the list index
    const updatedItem = { ...filter[0], amount: filter[0].amount - 1 };
    const updatedList = anti_filter.concat(updatedItem);
    const updatedItemIndex = state.list.findIndex(
      (item) => item.id === action.id
    );
    state.total -= state.list[updatedItemIndex].price;
    return { list: updatedList, total: +state.total.toFixed(2) };
  }

  return { list: [], total: 0 };
};

// const cartReducer = (state, action) => {
//   if (action.type === 1) {
//     for (let i = 0; i < state.list.length; i++) {               //This Method will NOT change the list index
//       if (state.list[i].id === action.id) {
//         state.list[i].amount = state.list[i].amount + 1;
//         state.total += state.list[i].price;
//       }
//     }
//     return { list: state.list, total: +state.total.toFixed(2) };
//   }
//   if (action.type === 2) {
//     for (let i = 0; i < state.list.length; i++) {
//       if (state.list[i].id === action.id) {
//         state.list[i].amount = state.list[i].amount - 1;            //This Method will NOT change the list index
//         state.total -= state.list[i].price;
//       }
//     }
//     return { list: state.list, total: +state.total.toFixed(2) };
//   }

//   return { list: [], total: 0 };
// };

const CartProvider = (props) => {
  const [cartList, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const AddHandler = (id) => {
    dispatchCart({ type: 1, id: id });
  };

  const RemoveHandler = (id) => {
    dispatchCart({ type: 2, id: id });
  };

  return (
    <CartContext.Provider
      value={{
        cartList: cartList.list,
        total: cartList.total,
        add: AddHandler,
        remove: RemoveHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
