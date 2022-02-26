import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/auth" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credential) => ({
        url: "login",
        method: "POST",
        body: credential,
      }),
    }),
    register: builder.mutation({
      query: (userDetail) => ({
        url: "register",
        method: "POST",
        body: userDetail,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
