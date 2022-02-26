import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASEURL}/api/messages`,
  }),
  endpoints: (builder) => ({
    getMessages: builder.mutation({
      query: (conversationID) => {
        return { url: `/${conversationID}` };
      },
    }),
  }),
});

export const { useGetMessagesMutation } = messageApi;
