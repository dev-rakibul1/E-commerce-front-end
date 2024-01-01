import { Button, Col, DatePicker, Row, Space, TimePicker } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUpdateEmployeeShiftMutation } from "../../../redux/api/shiftApiSlice";
import SmallSpinner from "../../../shared/spinner/SmallSpiner";
import { AuthContext } from "../../authProvider/AuthProvider";
// const { RangePicker } = DatePicker;

const UpdateEmployeeShift = ({ editInfo }) => {
  const { employee } = useContext(AuthContext);
  const auth = employee?.data;

  const employeeInfo = editInfo?.data;
  //   console.log(employeeInfo);

  const [errors, setErrors] = useState("");
  const [startTimes, setStartTimes] = useState("");
  const [endTimes, setEndTimes] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");

  // Employee shift update
  const [updateEmployeeShift, { error, isLoading, isError, isSuccess }] =
    useUpdateEmployeeShiftMutation();

  useEffect(() => {
    if (isError) {
      error?.data?.errorMessages?.map((data) => setErrors(data));
    } else {
      setErrors("");
    }
  }, [isError, error, setErrors]);

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
      {errors && (
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

      {/* Employee slot update */}
      {auth?.role === "administrator" || auth?.role === "supervisor" ? (
        !employeeInfo?.shift.length ? (
          <div className="text-center my-2" style={{ marginTop: "70px" }}>
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
              {isLoading ? (
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

export default UpdateEmployeeShift;
