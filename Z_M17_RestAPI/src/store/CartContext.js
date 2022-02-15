import React from "react";

const CartContext = React.createContext({
  cartList: [
    {
      id: "m4",
      name: "Green Bowl",
      amount: 1,
      price: 11.99,
    },
    {
      id: "m5",
      name: "Red Bowl",
      amount: 10,
      price: 18.99,
    },
    {
      id: "m6",
      name: "Yellow Bowl",
      amount: 5,
      price: 5.5,
    },
  ],
  add: () => {},
  remove: () => {},
});

export default CartContext;
