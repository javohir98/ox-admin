import {
  LogoutOutlined,
  HomeOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

export const getMenuItems = (): MenuProps["items"] => [
  {
    key: "/",
    icon: <HomeOutlined style={{ fontSize: 18 }} />,
    label: "Home",
  },
  {
    key: "/products",
    icon: <ProductOutlined style={{ fontSize: 18 }} />,
    label: "Search products",
  },
  {
    key: "logout",
    danger: true,
    icon: <LogoutOutlined style={{ fontSize: 18 }} />,
    label: "Logout",
  },
];
