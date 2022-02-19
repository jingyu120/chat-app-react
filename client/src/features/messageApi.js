import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/messages",
  }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (conversationID) => {
        return { url: `/${conversationID}` };
      },
    }),
  }),
});

export const { useGetMessagesQuery } = messageApi;
