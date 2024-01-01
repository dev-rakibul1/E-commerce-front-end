import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const shiftApiSlice = createApi({
  reducerPath: "shift-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mes-pi.vercel.app/api/v1/",
    headers: {
      Authorization: `${getToken()}`,
    },
  }),
  tagTypes: ["shift"],
  endpoints: (builder) => ({
    // Get employee
    getShift: builder.query({
      query: () => `/shift`,
      providesTags: ["shift"],
    }),

    getSingleShift: builder.query({
      query: (id) => `/shift/${id}`,
      providesTags: ["shift"],
    }),

    // shiftFilterByEmployee: builder.query({
    //   query: (id) => `/shift/${id}`,
    //   providesTags: ["shift"],
    // }),

    shiftFilterByEmployee: builder.query({
      query: (id) => {
        return `/shift/filter-by-employee/${id}`;
      },
      providesTags: ["shift"],
    }),

    // update employee
    updateEmployeeShift: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/shift/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["shift"],
    }),

    // Create employee
    createEmployeeShiftSlot: builder.mutation({
      query: (data) => ({
        url: `/shift/create-shift`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["shift"],
    }),
  }),
});

export const {
  useGetShiftQuery,
  useGetSingleShiftQuery,
  useShiftFilterByEmployeeQuery,
  useUpdateEmployeeShiftMutation,
  useCreateEmployeeShiftSlotMutation,
} = shiftApiSlice;
