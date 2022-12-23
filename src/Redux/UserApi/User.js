import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BackednUrl from "../../Utils/BackendUrl";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BackednUrl}),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => {
        return {
          url: "sign-in",
          body: data,
          method: "POST",
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },

    }),
    signUp: builder.mutation({
      query: (data) => {
        return {
          url: "sign-up",
          body: data,
          method: "POST",
          headers: { "content-type": "application/json" },
          credentials: "include",

        };
      },
      invalidatesTags:['user' ]
    }),
        logout: builder.mutation({
      query: (data ) => {
        return {
          url: "logout",
          method: "GET",
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },
    }),
    
  
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignInMutation, useSignUpMutation ,useLogoutMutation } = userApi;
 