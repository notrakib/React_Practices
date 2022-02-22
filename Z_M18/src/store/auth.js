import { createSlice } from "@reduxjs/toolkit";

const initialAuth = { isAuth: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    authentication(state) {
      state.isAuth = !state.isAuth;
    },
  },
});

export const AuthAction = authSlice.actions;
export default authSlice.reducer;
