import { Button, Col, Input, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import { useUpdateEmployeeMutation } from "../../redux/api/employeeApiSlice";
import AlertMessage from "../../shared/alert/Alert";
import SmallSpinner from "../../shared/spinner/SmallSpiner";
import { AuthContext } from "../authProvider/AuthProvider";
import UpdateEmployeeShift from "./UpdateEmployeeShift/UpdateEmployeeShift";
// const { RangePicker } = DatePicker;

const EditEmployee = () => {
  const { employee } = useContext(AuthContext);
  const auth = employee?.data;
  const datas = useLoaderData();
  const employeeInfo = datas?.data;
  const [newEntry, setNewEntry] = useState(employeeInfo);
  const [errors, setErrors] = useState("");

  // Employee update
  const [updateEmployee, { error, isLoading, isError, isSuccess }] =
    useUpdateEmployeeMutation();

  useEffect(() => {
    if (isError) {
      error?.data?.errorMessages?.map((data) => setErrors(data));
    } else {
      setErrors("");
    }
  }, [isError, error, setErrors]);

  console.log(errors);

  const handleInputUpdate = async (event) => {
    event.preventDefault();

    const eventData = event.target;
    // console.log(eventData);
    const updateData = {
      firstName: eventData?.firstName?.value,
      middleName: eventData?.middleName?.value,
      lastName: eventData?.lastName?.value,
      email: eventData?.email?.value,
      phone: eventData?.phone?.value,
      gender: eventData?.gender?.value,
      address: eventData?.address?.value,
      role: eventData?.role?.value,
    };

    updateEmployee(updateData);
    await updateEmployee({
      id: employeeInfo?._id,
      ...updateData,
    });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    if (field === "profileImage") {
      const profileImage = event.target.files[0];

      // Handle other properties as needed
      setNewEntry({
        ...newEntry,
        [field]: profileImage,
        imageUrl: profileImage ? URL.createObjectURL(profileImage) : "",
      });
    } else {
      setNewEntry({
        ...newEntry,
        [field]: value,
      });
    }
  };

  // console.log(employeeInfo?._id);

  return (
    <div className="" style={{ width: "100%" }}>
      {/* Topbar */}
      <div className="topbar">
        <button className="action-button" onClick={() => window.history.back()}>
          <RiArrowGoBackLine className="mr-1" /> Back
        </button>
      </div>

      {isSuccess && (
        <AlertMessage
          message="Employee updated success!"
          type="success"
          showIcon="showIcon"
          background="green"
        />
      )}

      <h1
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "14px 0",
          textTransform: "capitalize",
          fontSize: "19px",
          fontWeight: "400",
        }}
      >
        Update{" "}
        {`${employeeInfo?.firstName} ${employeeInfo?.middleName} ${employeeInfo?.lastName}'s data`}
      </h1>

      {errors?.message && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px ",
          }}
        >
          <span
            style={{
              background: "#ffd3d3",
              padding: "10px",
              textAlign: "center",
              maxWidth: "100%",
              width: "320px",
              color: "red",
              display: "flex",
              borderRadius: "4px",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "0.875rem",
            }}
          >
            {errors?.message}
          </span>
        </div>
      )}

      <form onSubmit={handleInputUpdate}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Row gutter={[16, 16]}>
            {/* For Extra Small (xs) devices, use full width (24 columns) */}
            <Col sm={12} md={12} lg={8}>
              <Input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleInputChange}
                defaultValue={employeeInfo?.firstName}
              />
            </Col>

            {/* For Small (sm) devices and above, use 12 columns (50%) */}
            <Col sm={12} md={12} lg={8}>
              <Input
                name="middleName"
                placeholder="Middle Name"
                onChange={handleInputChange}
                defaultValue={employeeInfo?.middleName}
              />
            </Col>

            <Col sm={12} md={12} lg={8}>
              <Input
                name="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
                defaultValue={employeeInfo?.lastName}
              />
            </Col>

            <Col sm={12} md={12} lg={8}>
              <Input
                name="email"
                placeholder="Email address"
                onChange={handleInputChange}
                defaultValue={employeeInfo?.email}
              />
            </Col>

            <Col sm={12} md={12} lg={8}>
              <Input
                name="phone"
                placeholder="Phone number"
                onChange={handleInputChange}
                defaultValue={employeeInfo?.phone}
              />
            </Col>

            <Col sm={12} md={12} lg={8}>
              <Input
                name="gender"
                placeholder="Gender"
                onChange={handleInputChange}
                defaultValue={employeeInfo?.gender}
              />
            </Col>
            <Col sm={12} md={12} lg={8}>
              <Input
                name="address"
                placeholder="Address"
                onChange={handleInputChange}
                defaultValue={employeeInfo?.address}
              />
            </Col>

            {auth?.role === "administrator" && (
              <Col sm={12} md={12} lg={8}>
                <Input
                  name="role"
                  placeholder="Role"
                  onChange={handleInputChange}
                  defaultValue={employeeInfo?.role}
                />
              </Col>
            )}
          </Row>
        </div>

        <div className="mt-2 flex-center">
          {isLoading ? (
            <SmallSpinner />
          ) : (
            <Button type="primary" htmlType="submit">
              Update employee
            </Button>
          )}
        </div>
      </form>

      {/* Employee slot update */}
      <UpdateEmployeeShift editInfo={datas} />
    </div>
  );
};

export default EditEmployee;
