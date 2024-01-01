import axios from "axios";
import React, { useContext, useEffect } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import { useGetAllAdministratorQuery } from "../../redux/api/employeeApiSlice";
import Spinner from "../../shared/spinner/Spinner";

const ManageAdministrators = () => {
  const { employee } = useContext(AuthContext);
  const auth = employee?.data;
  const { data, isLoading } = useGetAllAdministratorQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const allEmployee = data?.data;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      // Set up Axios interceptor to attach token to every outgoing request
      const requestInterceptor = axios.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `${token}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      // Clean up the interceptor when the component is unmounted
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
      };
    }
  }, [auth]);

  return (
    <div>
      <div style={{ width: "100%" }}>
        {isLoading ? (
          <div className="flex-center min-height">
            <Spinner />
          </div>
        ) : !allEmployee?.length ? (
          <h1 className="flex-center min-height" style={{ color: "#696189" }}>
            Administrator is empty
          </h1>
        ) : (
          <div>
            {/* Topbar */}
            <div className="topbar">
              <button
                className="action-button"
                onClick={() => window.history.back()}
              >
                <RiArrowGoBackLine className="mr-1" /> Back
              </button>
            </div>

            <h1 className="title">Manage Administrator</h1>
            <table className="manage-table">
              <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>Name</th>
                <th>Email</th>
                <th>Shift</th>
                <th>Action</th>
              </tr>
              {allEmployee?.map((employee) => (
                <tr key={employee?._id}>
                  <td>
                    <img
                      src={employee?.profilePicture}
                      className="employee-face"
                      alt=""
                    />
                  </td>
                  <td>{employee?.role}</td>
                  <td>{`${employee?.firstName} ${employee?.middleName} ${employee?.lastName}`}</td>
                  <td>{employee?.email}</td>
                  <td>
                    {employee?.shift[0]?.startTime &&
                    employee?.shift[0]?.endTime
                      ? `${employee?.shift[0]?.startTime} - ${employee?.shift[0]?.endTime}`
                      : "Shift slot not available"}
                  </td>
                  <td>
                    <Link to={`/details/${employee?._id}`}>Details</Link>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAdministrators;
