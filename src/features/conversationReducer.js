import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    value: { socket: null, conversation: null, recipient: null, messages: [] },
  },
  reducers: {
    setConversation: (state, action) => {
      state.value.conversation = action.payload;
    },
    setRecipient: (state, action) => {
      state.value.recipient = action.payload;
    },
    retrieveMessages: (state, action) => {
      state.value.messages = action.payload;
    },
    appendMessages: (state, action) => {
      state.value.messages.push(action.payload);
    },
    setSocket: (state, action) => {
      state.value.socket = action.payload;
    },
  },
});

export const {
  setConversation,
  setRecipient,
  retrieveMessages,
  appendMessages,
  setSocket,
} = conversationSlice.actions;
export default conversationSlice.reducer;
