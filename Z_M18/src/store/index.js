import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterSlices, auth: authSlice },
});

export default store;
