import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const Contents = ({ children }) => {
  return (
    <Content style={{ minHeight: "100vh", padding: "15px" }}>
      <Outlet />
    </Content>
  );
};

export default Contents;
