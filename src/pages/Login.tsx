import { Button, Card, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { login } from "../api/auth";
import { setToken } from "../helpers/utils";
import { useState } from "react";

type FormValues = {
  username: string;
  password: string;
};

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (values: FormValues) => {
    setLoading(true);

    try {
      const { token, expires_at, lifetime } = await login(
        values.username,
        values.password
      );

      setLoading(false);
      setToken(token, expires_at, lifetime);
      message.success("Login successful!");
      navigate("/");
    } catch (err) {
      console.log(err);
      message.error("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "url('images/silver.webp') no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <Form
          onFinish={onFinish}
          style={{ maxWidth: 300, margin: "30px auto" }}
        >
          <img
            src="/images/ox-logo.svg"
            alt="logo"
            width={120}
            style={{ display: "block", margin: "0 auto 32px" }}
          />
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined style={{ color: "#bfbfbf" }} />}
              placeholder="Enter your username"
              autoComplete="username"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password
              prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
              placeholder="Enter your password"
              autoComplete="current-password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
