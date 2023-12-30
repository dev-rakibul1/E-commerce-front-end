import { configureStore } from "@reduxjs/toolkit";
import { employeeApiSlice } from "./api/employeeApiSlice";
import { shiftApiSlice } from "./api/shiftApiSlice";

export const store = configureStore({
  reducer: {
    employeeApiSlice: employeeApiSlice,
    shiftApiSlice: shiftApiSlice,
    [employeeApiSlice.reducerPath]: employeeApiSlice.reducer,
    [shiftApiSlice.reducerPath]: shiftApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shiftApiSlice.middleware,
      employeeApiSlice.middleware
    ),
});
