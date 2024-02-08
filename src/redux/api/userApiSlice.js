import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authKey } from "../../constants/storageKey";
import { getFromLocalStorage } from "../../utility/local-storage";
const token = getFromLocalStorage(authKey);

export const userApiSlice = createApi({
  reducerPath: "user-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/",
    headers: {
      Authorization: `${token}`,
    },
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    // Get user
    getUser: builder.query({
      query: () => `/get-auth`,
      providesTags: ["user"],
    }),

    // login employee
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/product/create-product/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetUserQuery, useCreateProductMutation } = userApiSlice;
