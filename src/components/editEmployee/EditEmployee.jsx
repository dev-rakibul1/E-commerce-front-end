import { Button, Col, DatePicker, Input, Row, Space, TimePicker } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useUpdateEmployeeMutation } from "../../redux/api/employeeApiSlice";
import { useUpdateEmployeeShiftMutation } from "../../redux/api/shiftApiSlice";
import AlertMessage from "../../shared/alert/Alert";
import SmallSpinner from "../../shared/spinner/SmallSpiner";
import { AuthContext } from "../authProvider/AuthProvider";
// const { RangePicker } = DatePicker;

const EditEmployee = () => {
  const { employee } = useContext(AuthContext);
  const auth = employee?.data;
  const datas = useLoaderData();
  const employeeInfo = datas?.data;
  const [newEntry, setNewEntry] = useState(employeeInfo);
  const [errors, setErrors] = useState("");
  const [startTimes, setStartTimes] = useState("");
  const [endTimes, setEndTimes] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");

  // Employee update
  const [updateEmployee, { error, isLoading, isError, isSuccess }] =
    useUpdateEmployeeMutation();

  // Employee shift update
  const [
    updateEmployeeShift,
    {
      error: shiftErr,
      isLoading: shiftLoading,
      isError: shiftError,
      isSuccess: shiftSuccess,
    },
  ] = useUpdateEmployeeShiftMutation();

  useEffect(() => {
    if (isError) {
      console.log(error);
      error?.data?.errorMessages?.map((data) => setErrors(data));
    } else {
      setErrors("");
    }

    // if (shiftError) {
    //   shiftErr?.data?.errorMessages?.map((data) => setErrors(data));
    // } else {
    //   setErrors("");
    // }

    if (shiftError) {
      console.log(shiftErr);
      setErrors(shiftErr?.data?.message);
    } else if (shiftErr?.data?.errorMessages) {
      shiftErr?.data?.errorMessages?.map((data) => setErrors(data));
    } else {
      setErrors("");
    }
  }, [shiftError, shiftErr, isError, error, setErrors]);

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

    console.log(updateData);
  };

  // console.log(employeeInfo?._id);

  const handleEmployeeSlotUpdate = async (event) => {
    event.preventDefault();

    const slotUpdateData = {
      startTime: startTimes,
      endTime: endTimes,
      date: employeeDate,
    };

    await updateEmployeeShift({
      id: employeeInfo?.shift[0]?._id,
      ...slotUpdateData,
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

  // Time and date handle
  const handleEmployeeStartTime = (value, dateString) => {
    setStartTimes(dateString);
  };
  const handleEmployeeEndTime = (value, dateString) => {
    setEndTimes(dateString);
  };

  const handleEmployeeDate = (time, timeString) => {
    setEmployeeDate(timeString);
  };

  // console.log(employeeInfo?._id);

  return (
    <div className="" style={{ width: "100%" }}>
      {(shiftSuccess || isSuccess) && (
        <AlertMessage
          message={
            shiftSuccess
              ? "Employee shift update success!"
              : "Employee updated success!"
          }
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
      {auth?.role === "administrator" || auth?.role === "supervisor" ? (
        !employeeInfo?.shift.length ? (
          <div className="text-center my-2">
            <h3 className="">
              This employee shift slot is not available. Please create a shift
              slot.
            </h3>
            <Link to={`/create-shift/${employeeInfo?._id}`}>
              <Button type="primary" className="mt-1">
                Create a shift slot
              </Button>
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleEmployeeSlotUpdate}
            style={{ marginTop: "70px" }}
          >
            <h1 className="title">
              Update{" "}
              {`${employeeInfo?.firstName} ${employeeInfo?.middleName} ${employeeInfo?.lastName}'s shift slot`}
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Row gutter={[16, 16]}>
                <Col sm={12} md={12} lg={8}>
                  <Space direction="vertical" size={12}>
                    <TimePicker
                      placeholder="Start Time"
                      format="h:mm a"
                      onChange={handleEmployeeStartTime}
                    />
                  </Space>
                </Col>

                <Col sm={12} md={12} lg={8}>
                  <Space direction="vertical" size={12}>
                    <TimePicker
                      placeholder="End Time"
                      format="h:mm a"
                      onChange={handleEmployeeEndTime}
                    />
                  </Space>
                </Col>
                <Col sm={12} md={12} lg={8}>
                  <DatePicker
                    format="DD-MM-YYYY"
                    onChange={handleEmployeeDate}
                  />
                </Col>
              </Row>
            </div>

            <div className="mt-2 flex-center">
              {shiftLoading ? (
                <SmallSpinner />
              ) : (
                <Button type="primary" htmlType="submit">
                  Update shift
                </Button>
              )}
            </div>
          </form>
        )
      ) : null}
    </div>
  );
};

export default EditEmployee;
