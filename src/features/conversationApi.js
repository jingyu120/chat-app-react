import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const conversationApi = createApi({
  reducerPath: "userApconversationApii",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASEURL}/api/conversations`,
  }),
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (userID) => {
        return { url: `/${userID}` };
      },
    }),
    getConversation: builder.mutation({
      query: (conversationID) => {
        return { url: "/", method: "POST", body: conversationID };
      },
    }),
  }),
});

export const { useGetConversationsQuery, useGetConversationMutation } =
  conversationApi;
