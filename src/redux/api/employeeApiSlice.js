import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const employeeApiSlice = createApi({
  reducerPath: "employee-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    headers: {
      Authorization: `${getToken()}`,
    },
  }),
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
    // Password change
    passwordChange: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/employee/password-change/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["employee"],
    }),

    // Delete employee
    deleteEmployee: builder.mutation({
      query: (employeeId) => ({
        url: `/employee/${employeeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["employee"],
    }),

    logoutEmployee: builder.query({
      query: () => `/auth/logout`,
      providesTags: ["employee"],
    }),
    getAllAdministrator: builder.query({
      query: () => `/employee/administrator`,
      providesTags: ["employee"],
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
  useLogoutEmployeeQuery,
  usePasswordChangeMutation,
  useDeleteEmployeeMutation,
  useGetAllAdministratorQuery,
} = employeeApiSlice;
