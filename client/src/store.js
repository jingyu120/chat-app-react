import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/authApi";
import { userApi } from "./features/userApi";
import authReducer from "./features/user";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(authApi.middleware),
});

export default store;
