import { Alert, Space } from "antd";
import React from "react";

const AlertMessage = ({ message, description, type, showIcon, background }) => (
  <Space
    direction="vertical"
    style={{
      width: "25%",
      position: "absolute",
      top: "3%",
      right: "1%",
      zIndex: 99,
      fontWeight: "bold",
    }}
  >
    <Alert
      message={message}
      description={description}
      type={type}
      {...showIcon}
      background="#e6f7ff"
      closable
    />
  </Space>
);
export default AlertMessage;
