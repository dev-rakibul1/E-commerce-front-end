import { Col, Row } from "antd";
import React, { useContext } from "react";
import {
  RiArrowGoBackLine,
  RiDeleteBinLine,
  RiPencilLine,
} from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import "./ManageEmployeePage.css";

const ManageEmployeePage = () => {
  const manageEmployeeData = useLoaderData();
  const data = manageEmployeeData?.data;
  const { employee } = useContext(AuthContext);
  const auth = employee?.data;

  // console.log(data);

  return (
    <div className="user-details-container">
      {/* Topbar */}
      <div className="topbar">
        <Link
          to={
            (data?.role === "employee" && "/manage-employee") ||
            (data?.role === "supervisor" && "/manage-supervisor") ||
            (data?.role === "administrator" && "/manage-administrator")
          }
        >
          <button className="action-button">
            <RiArrowGoBackLine className="mr-1" /> Back
          </button>
        </Link>
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

      {/* User Details Columns */}

      <div>
        <div className="flex items-center justify-start">
          <img src={data?.profilePicture} className="profile-pic mt-2" alt="" />
          <div className="ml-2">
            <h3>Role: {data?.role}</h3>
            <h4 className="mt-1">
              Name: {`${data?.firstName} ${data?.middleName} ${data?.lastName}`}
            </h4>
            <h4 className="mt-1">
              Employee shift:{" "}
              {data?.shift[0]?.startTime && data?.shift[0]?.endTime
                ? `${data?.shift[0]?.startTime} - ${data?.shift[0]?.endTime}`
                : "Shift slot not available"}
            </h4>
          </div>
        </div>
        <Row gutter={[16, 16]} className="mt-2">
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <div className="mt-2">
              <h4>Email Address</h4>
              <p style={{ fontWeight: "400" }}>{data?.email}</p>
            </div>
            <div className="mt-2">
              <h4>Address</h4>
              <p style={{ fontWeight: "400" }}>{data?.address}</p>
            </div>
          </Col>

          {/* Medium Devices */}
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <div className="mt-2">
              <h4>Phone Number</h4>
              <p style={{ fontWeight: "400" }}>{data?.phone}</p>
            </div>
          </Col>

          {/* Small Devices */}
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <div className="mt-2">
              <h4>Gender</h4>
              <p style={{ fontWeight: "400" }}>{data?.gender}</p>
            </div>
          </Col>

          {/* Small Devices */}
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <div className="mt-2">
              <h4>Date</h4>
              <p style={{ fontWeight: "400" }}>{data?.shift[0]?.date}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ManageEmployeePage;
