import { PERSIST, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/authApi";
import { userApi } from "./features/userApi";
import authReducer from "./features/userReducer";
import { conversationApi } from "./features/conversationApi";
import { messageApi } from "./features/messageApi";
import conversationReducer from "./features/conversationReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    conversation: conversationReducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [conversationApi.reducerPath]: conversationApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: { ignoreActions: [PERSIST] } })
      .concat(userApi.middleware)
      .concat(authApi.middleware)
      .concat(conversationApi.middleware)
      .concat(messageApi.middleware),
});

export default store;
