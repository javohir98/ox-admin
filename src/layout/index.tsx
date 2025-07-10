import { useMemo, useState } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer, Layout, Menu } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getOpenKeys, removeToken } from "../helpers/utils";
import { getMenuItems } from "../helpers/menus";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = useMemo(() => getMenuItems(), []);
  const openKeys = getOpenKeys(menuItems, pathname);

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "logout") {
      removeToken();
      navigate("/login");
      return;
    }
    if (window.innerWidth < 768) {
      setCollapsed(false);
    }
    navigate(key);
  };

  const menu = (
    <Menu
      mode="inline"
      style={{ minHeight: "100%" }}
      selectedKeys={[pathname]}
      defaultOpenKeys={openKeys}
      onClick={handleMenuClick}
      items={menuItems}
    />
  );

  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          padding: "0 12px",
          alignItems: "center",
          background: "#fff",
          boxShadow: "0 2px 4px #f0f1f2",
          lineHeight: 1,
        }}
      >
        <MenuUnfoldOutlined
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: "18px", margin: "0 18px" }}
        />
        <Link to="/">
          <img src="/images/ox-logo.svg" height={40} alt="logo" />
        </Link>
      </Header>
      <Layout style={{ marginBottom: 6 }}>
        {window.innerWidth > 768 ? (
          <Sider
            width={250}
            collapsible
            trigger={null}
            theme="light"
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            onBreakpoint={(broken) => setCollapsed(broken)}
            style={{
              overflow: "auto",
              height: "100%",
              position: "sticky",
              top: 64,
              borderRadius: 8,
              transition: "all 0.2s ease-in-out",
            }}
          >
            {menu}
          </Sider>
        ) : (
          <Drawer
            title="Menu"
            placement="left"
            closable
            onClose={() => setCollapsed(false)}
            open={collapsed}
            styles={{
              body: { padding: 0 },
            }}
          >
            {menu}
          </Drawer>
        )}
        <Layout style={{ padding: "0 6px", overflow: "hidden" }}>
          <Content
            style={{
              padding: "12px",
              margin: 0,
              minHeight: 280,
              background: "white",
              borderRadius: 8,
              overflow: "auto",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
