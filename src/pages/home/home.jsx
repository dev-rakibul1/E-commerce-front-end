import React, { useContext, useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCalendar,
  FaClock,
  FaEnvelope,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import { useLogoutEmployeeQuery } from "../../redux/api/employeeApiSlice";
import { useShiftFilterByEmployeeQuery } from "../../redux/api/shiftApiSlice";
import Spinner from "../../shared/spinner/Spinner";
import "./Home.css";
const randomSeed = Math.floor(Math.random() * 1000);
const imageUrl = `https://picsum.photos/seed/${randomSeed}/200/300`;

const Home = () => {
  const { employee, isLoading: authLoading } = useContext(AuthContext);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  // console.log("first", employee?.data?._id);

  const employeeInfo = employee?.data;
  const id = employeeInfo?._id;

  const { data, error, isLoading, isError, isSuccess } =
    useShiftFilterByEmployeeQuery(id, {
      refetchOnMountOrArgChange: true,
    });
  const {
    data: logoutData,
    isLoading: logoutLoading,
    isError: logoutError,
  } = useLogoutEmployeeQuery();

  useEffect(() => {
    if (isError) {
      error?.data?.errorMessages?.map((data) => setErrors(data));
    } else {
      setErrors("");
    }
  }, [isError, error, setErrors]);

  const employeeShift = data?.data;
  // console.log(employeeShift);

  const handleLogout = () => {
    try {
      localStorage.removeItem("accessToken");
      // setEmployee(null);
      navigate("/auth/login");
      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex-center flex-col">
      <h1 className="dashboard-employee-title">Welcome from Dashboard</h1>

      <div className="flex-center flex-col">
        <img
          src={
            employeeInfo?.profilePicture
              ? employeeInfo?.profilePicture
              : imageUrl
          }
          style={{
            maxWidth: "100%",
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "100%",
          }}
          alt="profile-img"
        />

        {authLoading ? (
          <div className="flex-center">
            <Spinner />
          </div>
        ) : (
          <article className="user-info">
            <h3>
              <FaUser />

              {!(
                employeeInfo?.firstName ||
                employeeInfo?.middleName ||
                employeeInfo?.lastName
              )
                ? "Placeholder name"
                : `${employeeInfo?.firstName} ${employeeInfo?.middleName} ${employeeInfo?.lastName}`}
            </h3>
            <ul>
              <li>
                <FaBriefcase /> Role:{" "}
                {employeeInfo?.role
                  ? employeeInfo?.role
                  : "Placeholder employee"}
              </li>
              <li>
                <FaEnvelope /> Email:{" "}
                {employeeInfo?.email
                  ? employeeInfo?.email
                  : "placeholder@.info.com"}
              </li>

              {isLoading ? (
                <div className="flex-center">
                  <Spinner />
                </div>
              ) : (
                <div className="">
                  <li>
                    <FaClock /> Shift:{" "}
                    {employeeShift?.startTime && employeeShift?.endTime
                      ? `${employeeShift?.startTime} - ${employeeShift?.endTime}`
                      : "slot not available"}
                  </li>
                  <li>
                    <FaCalendar />
                    Time:{" "}
                    {employeeShift?.date
                      ? employeeShift?.date
                      : "update time..."}
                  </li>
                  <li style={{ cursor: "pointer" }} onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                  </li>
                </div>
              )}
            </ul>
          </article>
        )}
      </div>
    </div>
  );
};

export default Home;
