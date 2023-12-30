import { Button, Col, DatePicker, Row, Space, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useCreateEmployeeShiftSlotMutation } from "../../redux/api/shiftApiSlice";
import AlertMessage from "../../shared/alert/Alert";
import SmallSpinner from "../../shared/spinner/SmallSpiner";

const CreateShiftSlot = () => {
  const [startTimes, setStartTimes] = useState("");
  const [endTimes, setEndTimes] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");
  const [errors, setErrors] = useState("");
  const createSlotEmployee = useLoaderData();
  const employeeInfo = createSlotEmployee?.data;
  const id = useParams();

  const [createEmployeeShift, { error, isLoading, isError, isSuccess }] =
    useCreateEmployeeShiftSlotMutation({
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    });

  useEffect(() => {
    if (isError) {
      console.log(error?.data?.errorMessages);
      setErrors(error?.data?.message);
    } else if (error?.data?.errorMessages) {
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

    await createEmployeeShift({
      employee: id?.id,
      ...slotUpdateData,
    });
  };

  console.log(errors);

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

  return (
    <div>
      {isSuccess && (
        <AlertMessage
          message="Employee shift created success!"
          type="success"
          showIcon="showIcon"
          background="green"
        />
      )}

      <form onSubmit={handleEmployeeSlotUpdate}>
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
          Create a{" "}
          {`${employeeInfo?.firstName} ${employeeInfo?.middleName} ${employeeInfo?.lastName}'s shift slot`}
        </h1>

        {/* Handle error message */}
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
              {errors}
            </span>
          </div>
        )}

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
              <DatePicker format="DD-MM-YYYY" onChange={handleEmployeeDate} />
            </Col>
          </Row>
        </div>

        <div className="mt-2 flex-center">
          {isLoading ? (
            <SmallSpinner />
          ) : (
            <Button type="primary" htmlType="submit">
              Create shift
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateShiftSlot;
