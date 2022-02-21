import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: null },
  reducers: {
    saveLogin: (state, action) => {
      state.value = action.payload;
    },
    logoutUser: (state, action) => {
      state.value = null;
    },
    addFriend: (state, action) => {
      state.value.following.push(action.payload);
    },
  },
});

export const { saveLogin, logoutUser, addFriend } = userSlice.actions;
export default userSlice.reducer;
