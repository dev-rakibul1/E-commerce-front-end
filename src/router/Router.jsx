import { createBrowserRouter } from "react-router-dom";
import EditEmployee from "../components/editEmployee/EditEmployee";
import EditProfile from "../components/editProfile/EditProfile";
import ManageEmployeePage from "../components/manageEmployeePage/ManageEmployeePage";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import RegisterLayout from "../layout/registerLayout/RegisterLayout";
import ProfileAccount from "../pages/ProfileAccount/ProfileAccount";
import ChangePassword from "../pages/changePassword/ChangePassword";
import CreateShiftSlot from "../pages/createShiftSlot/CreateShiftSlot";
import Home from "../pages/home/home";
import Login from "../pages/login/Login";
import ManageAdministrators from "../pages/manageAdministrator/ManageAdministrators";
import ManageEmployee from "../pages/manageEmployee/ManageEmployee";
import ManageSupervisors from "../pages/manageSupervisor/ManageSupervisors";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile-account",
        element: <ProfileAccount />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/manage-administrator",
        element: <ManageAdministrators />,
      },
      {
        path: "/manage-supervisor",
        element: <ManageSupervisors />,
      },
      {
        path: "/manage-employee",
        element: <ManageEmployee />,
      },

      {
        path: "/edit-profile/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/employee/${params.id}`, {
            headers: {
              authorization: `${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
          }),
        element: <EditProfile />,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/employee/${params.id}`, {
            headers: {
              authorization: `${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
          }),
        element: <ManageEmployeePage />,
      },

      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/employee/${params.id}`, {
            headers: {
              authorization: `${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
          }),
        element: <EditEmployee />,
      },

      {
        path: "/create-shift/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/employee/${params?.id}`, {
            headers: {
              authorization: `${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
          }),
        element: <CreateShiftSlot />,
      },
    ],
  },

  {
    path: "/auth",
    element: <RegisterLayout />,
    children: [
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/login", element: <Login /> },
      // { path: "/auth/docs", element: <Documents /> },
    ],
  },
]);

export default router;
