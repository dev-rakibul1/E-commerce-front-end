import React, { useContext, useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCalendar,
  FaClock,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import { useShiftFilterByEmployeeQuery } from "../../redux/api/shiftApiSlice";
import Spinner from "../../shared/spinner/Spinner";
import "./Home.css";

const Home = () => {
  const { employee, isLoading: authLoading } = useContext(AuthContext);
  const [errors, setErrors] = useState("");

  // console.log("first", employee?.data?._id);

  const employeeInfo = employee?.data;
  const id = employeeInfo?._id;

  const { data, error, isLoading, isError, isSuccess } =
    useShiftFilterByEmployeeQuery(id, {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    });

  useEffect(() => {
    if (isError) {
      console.log(error?.data);
      error?.data?.errorMessages?.map((data) => setErrors(data));
    } else {
      setErrors("");
    }
  }, [isError, error, setErrors]);

  const employeeShift = data?.data;
  // console.log(employeeShift);

  return (
    <div className="flex-center flex-col">
      <h1 className="dashboard-employee-title">Welcome from Dashboard</h1>

      <div className="flex-center flex-col">
        <img
          src={employeeInfo?.profilePicture}
          style={{
            maxWidth: "100%",
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "100%",
          }}
          alt=""
        />

        {authLoading ? (
          <div className="flex-center">
            <Spinner />
          </div>
        ) : (
          <article className="user-info">
            <h3>
              <FaUser />
              {`${employeeInfo?.firstName} ${employeeInfo?.middleName} ${employeeInfo?.lastName}`}
            </h3>
            <ul>
              <li>
                <FaBriefcase /> Role: {employeeInfo?.role}
              </li>
              <li>
                <FaEnvelope /> Email: {employeeInfo?.email}
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
