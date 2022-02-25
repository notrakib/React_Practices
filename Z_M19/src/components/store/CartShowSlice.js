import { createSlice } from "@reduxjs/toolkit";

const cartShowSlice = createSlice({
  name: "cartShow",
  initialState: { value: false },
  reducers: {
    showCart(state) {
      state.value = !state.value;
    },
  },
});

export const CartShowAction = cartShowSlice.actions;
export default cartShowSlice.reducer;
