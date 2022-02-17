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
    addFriend: (state, action) => {
      state.value.following.push(action.payload);
    },
  },
});

export const { saveLogin, logoutUser, addFriend } = userSlice.actions;
export default userSlice.reducer;
