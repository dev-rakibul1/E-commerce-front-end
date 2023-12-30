import React, { useContext } from "react";
import {
  RiArrowGoBackLine,
  RiDeleteBinLine,
  RiPencilLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import { useGetEmployeeQuery } from "../../redux/api/employeeApiSlice";
import Spinner from "../../shared/spinner/Spinner";
import "./ManageEmployee.css";

const ManageEmployee = () => {
  const { employee } = useContext(AuthContext);
  const auth = employee?.data;
  const { data, isLoading } = useGetEmployeeQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const allEmployee = data?.data;
  // const id = allEmployee;
  // console.log(allEmployee);

  return (
    <div style={{ width: "100%" }}>
      {isLoading ? (
        <div className="flex-center min-height">
          <Spinner />
        </div>
      ) : !allEmployee?.length ? (
        <h1 className="flex-center min-height" style={{ color: "#696189" }}>
          Employee is empty
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
            <div className="topbar">
              <Link to={`/update/${data?._id}`}>
                <button className="action-button px-2">
                  <RiPencilLine className="mr-1" /> Update
                </button>
              </Link>
              {auth?.role === "administrator" && (
                <Link to={`/delete/${data?._id}`}>
                  <button className="action-button px-2">
                    <RiDeleteBinLine className="mr-1" /> Delete
                  </button>
                </Link>
              )}
            </div>
          </div>

          <h1 className="title">Manage employee</h1>
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
                  {employee?.shift[0]?.startTime && employee?.shift[0]?.endTime
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
  );
};

export default ManageEmployee;
