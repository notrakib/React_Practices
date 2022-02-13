import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { showCart: false, notifiaction: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    setNotification(state, action) {
      const getNotification = action.payload;
      state.notifiaction = {
        title: getNotification.title,
        message: getNotification.message,
        status: getNotification.status,
      };
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
