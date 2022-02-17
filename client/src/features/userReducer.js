import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: {} },
  reducers: {
    saveLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveLogin } = userSlice.actions;
export default userSlice.reducer;
