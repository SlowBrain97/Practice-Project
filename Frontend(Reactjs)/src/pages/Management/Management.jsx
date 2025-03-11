import "./Management.css";
import { Divider, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  BellOutlined,
  LayoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";
const Management = () => {
  const items = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
      className: "menu-group",
    },
    {
      key: "admin",
      label: "Admin",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          key: "admin-delete",
          label: "Admin Delete",
        },
        {
          key: "admin-create",
          label: "Admin Create",
        },
      ],
    },
    {
      key: "people",
      icon: <UserOutlined />,
      label: "People",
      children: [
        {
          key: "student",
          label: (
            <NavLink to="/management/student" className="menu-item-child">
              Student
            </NavLink>
          ),
        },
        {
          key: "teacher",
          label: (
            <NavLink to="/management/teacher" className="menu-item-child">
              Teacher
            </NavLink>
          ),
        },
        {
          key: "staff",
          label: (
            <NavLink to="/management/staff" className="menu-item-child">
              Staff
            </NavLink>
          ),
        },
      ],
    },
    {
      key: "classes",
      label: "Classes",
      icon: <LayoutOutlined />,
    },
    {
      label: <Divider style={{ width: "100%" }} />,
      type: "group",
    },
    {
      key: "notification",
      label: "Notification",
      icon: <BellOutlined />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <SettingOutlined />,
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <Menu
        items={items}
        style={{ maxWidth: "20%" }}
        mode="inline"
        inlineIndent={35}
      />
      <div style={{ flex: "1" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Management;
