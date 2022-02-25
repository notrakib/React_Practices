import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./CartItemSlice";
import CartShowSlice from "./CartShowSlice";

const store = configureStore({
  reducer: { cartItem: CartItemSlice, cartShow: CartShowSlice },
});

export default store;
