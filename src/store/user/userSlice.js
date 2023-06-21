import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(`Loged as ${action.payload}`);
    },
    register: (state, action) => {
      console.log(`Regiser as ${action.payload}`);
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, register } = userSlice.actions;

export default userSlice.reducer;
