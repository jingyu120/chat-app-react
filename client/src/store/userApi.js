import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/user" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (param) => {
        return { url: "/", params: param };
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
