import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApiSlice = createApi({
  reducerPath: "employee-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["employee"],
  endpoints: (builder) => ({
    // Get employee
    getEmployee: builder.query({
      query: () => `/employee`,
      providesTags: ["employee"],
    }),

    // Get employee
    getSupervisor: builder.query({
      query: () => `/employee/supervisor`,
      providesTags: ["employee"],
    }),

    // Get auth
    getAuth: builder.query({
      query: () => `/get-auth`,
      providesTags: ["employee"],
    }),

    // Create employee
    createEmployee: builder.mutation({
      query: (data) => ({
        url: `/employee/create-employee`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["employee"],
    }),

    // update employee
    updateEmployee: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/employee/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["employee"],
    }),

    // login employee
    loginEmployee: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["employee"],
    }),
  }),
});

export const {
  useCreateEmployeeMutation,
  useGetEmployeeQuery,
  useGetAuthQuery,
  useUpdateEmployeeMutation,
  useGetSupervisorQuery,
  useLoginEmployeeMutation,
} = employeeApiSlice;
