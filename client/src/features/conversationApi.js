import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const conversationApi = createApi({
  reducerPath: "userApconversationApii",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/conversations",
  }),
  endpoints: (builder) => ({
    getConversation: builder.query({
      query: (userID) => {
        return { url: `/${userID}` };
      },
    }),
  }),
});

export const { useGetConversationQuery } = conversationApi;
