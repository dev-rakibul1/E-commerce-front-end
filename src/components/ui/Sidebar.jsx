import { Layout, Menu } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SidebarItems from "../../constants/sidebarItems";
import { AuthContext } from "../authProvider/AuthProvider";
import "./Sidebar.css";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { employee } = useContext(AuthContext);
  const employeeInfo = employee?.data;
  const employeeRole = employeeInfo?.role;
  const role = employeeRole ? employeeRole : "";

  return (
    <Sider
      className="sidebar"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
    >
      <Link to="/">
        <div>
          <h1 className="sidebar-title">Employee shift</h1>
        </div>
      </Link>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
