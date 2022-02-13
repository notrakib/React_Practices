import { createSlice } from "@reduxjs/toolkit";

const initialCartSlice = { items: [], totalPrice: 0, totalQuantity: 0 };

const cartSlice = createSlice({
  name: "carts",
  initialState: initialCartSlice,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
      state.items = action.payload.items;
    },
    addCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const check = state.items.find((item) => item.id === newItem.id);
      if (!check) {
        const item = {
          key: newItem.id,
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          total: newItem.price,
          price: newItem.price,
        };
        state.totalPrice = state.totalPrice + newItem.price;
        state.items.push(item);
      } else {
        check.total = check.total + newItem.price;
        check.quantity = 1 + check.quantity;
        state.totalPrice = newItem.price + state.totalPrice;
      }
    },
    removeCart(state, action) {
      state.totalQuantity--;
      const newItem = action.payload;
      const check = state.items.find((item) => item.id === newItem.id);
      if (check.quantity > 1) {
        check.total = check.total - check.price;
        check.quantity = check.quantity - 1;
        state.totalPrice = state.totalPrice - check.price;
      } else {
        state.totalPrice = state.totalPrice - check.price;
        state.items = state.items.filter((item) => item.id !== newItem.id);
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
