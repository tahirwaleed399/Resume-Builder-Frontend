import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BackednUrl from "../../Utils/BackendUrl";

// Define a service using a base URL and expected endpoints
export const resumeApi = createApi({
  reducerPath: "resumeApi",
  baseQuery: fetchBaseQuery({ baseUrl: BackednUrl}),
  tagTypes: ['resume'],
  endpoints: (builder) => ({
    
    createResume: builder.mutation({
      query: (data) => {
        return {
          url: "create-resume",
          body: data,
          method: "POST",
          headers: { "content-type": "application/json" },
          credentials: "include",

        };
      },
      invalidatesTags:['resume' ]
    }), 
    
    getResumes: builder.query({
      query: () => {
        return {
          url: "resumes",
          method: "GET",
          headers: { "content-type": "application/json" },
          credentials: "include",

        };
      },
      providesTags:['resume']
      
    }),
           
    deleteResume: builder.mutation({
      query: (id) => {
        return {
          url: "resume",
          method: "DELETE",
          headers: { "content-type": "application/json" },
          credentials: "include",
          body : {id}

        };
      },
      invalidatesTags:['resume' ]
      
    }),
       
    
  
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetResumesQuery, useCreateResumeMutation,useDeleteResumeMutation } = resumeApi;
 