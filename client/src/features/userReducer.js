import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: {} },
  reducers: {
    saveLogin: (state, action) => {
      state.value = action.payload;
    },
    logoutUser: (state, action) => {
      state.value = {};
    },
  },
});

export const { saveLogin, logoutUser } = userSlice.actions;
export default userSlice.reducer;
