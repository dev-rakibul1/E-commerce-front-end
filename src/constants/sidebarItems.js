import {
  CrownOutlined,
  TeamOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ENUM_EMPLOYEE_ROLE } from "./role";

const SidebarItems = (role) => {
  const defaultSidebarItems = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link to={`/profile-account`}>Account Profile</Link>,
          key: `/profile-account`,
        },
        {
          label: <Link to={`/change-password`}>Change password</Link>,
          key: `/change-password`,
        },
      ],
    },
  ];

  const employeeSidebarItems = [
    {
      label: <Link to={`/manage-employee`}>Manage-Employee</Link>,
      icon: <ToolOutlined />,
      key: "manage-employee",
    },
  ];
  const supervisorSidebarItems = [
    {
      label: <Link to={`/manage-supervisor`}>Manage-Supervisor</Link>,
      icon: <TeamOutlined />,
      key: "manage-supervisor",
    },
  ];

  const administratorSidebarItems = [
    {
      label: <Link to={`/manage-administrator`}>Manage-Administrator</Link>,
      icon: <CrownOutlined />,
      key: "manage-administrator",
    },
  ];

  const manageEmployeeSidebarItems = [...defaultSidebarItems];
  const manageSupervisorSidebarItems = [
    ...defaultSidebarItems,
    ...employeeSidebarItems,
  ];

  const manageAdministratorSidebarItems = [
    ...defaultSidebarItems,
    ...employeeSidebarItems,
    ...supervisorSidebarItems,
    ...administratorSidebarItems,
  ];

  if (role === ENUM_EMPLOYEE_ROLE.ADMINISTRATOR)
    return manageAdministratorSidebarItems;
  else if (role === ENUM_EMPLOYEE_ROLE.SUPERVISOR)
    return manageSupervisorSidebarItems;
  else if (role === ENUM_EMPLOYEE_ROLE.EMPLOYEE)
    return manageEmployeeSidebarItems;
  else return defaultSidebarItems;
};

export default SidebarItems;
