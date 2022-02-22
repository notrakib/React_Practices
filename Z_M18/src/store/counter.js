import { createSlice } from "@reduxjs/toolkit";

const initialCounter = { counter: 0, showCounter: false };

const counterSlices = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    Increment(state) {
      state.counter++;
    },
    Decrement(state) {
      state.counter--;
    },
    Increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    Toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const CounterAction = counterSlices.actions;
export default counterSlices.reducer;
