import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASEURL}/api/user` }),
  endpoints: (builder) => ({
    searchUser: builder.query({
      query: (param) => {
        return { url: "/", params: param };
      },
    }),
    followFriend: builder.mutation({
      query: (body) => {
        return {
          url: "addUser",
          method: "POST",
          body,
        };
      },
    }),
    findFriendByID: builder.query({
      query: (userID) => {
        return {
          url: `${userID}`,
        };
      },
    }),
  }),
});

export const {
  useFindFriendByIDQuery,
  useSearchUserQuery,
  useFollowFriendMutation,
} = userApi;
