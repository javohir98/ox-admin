import { Typography, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "url('images/silver.webp') no-repeat center center",
        transform: "rotateY(180deg)",
        backgroundSize: "cover",
      }}
    >
      <Card
        style={{
          width: 600,
          textAlign: "center",
          boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
          borderRadius: "16px",
          transform: "rotateY(180deg)",
          border: "none",
        }}
      >
        <Title
          level={1}
          style={{
            fontSize: "120px",
            marginBottom: "0",
          }}
        >
          404
        </Title>

        <Title
          level={2}
          style={{
            marginBottom: "16px",
            color: "#1a1a1a",
            fontSize: "28px",
          }}
        >
          Oops! Page Not Found
        </Title>

        <Paragraph
          style={{
            fontSize: "16px",
            color: "#666",
            marginBottom: "24px",
            lineHeight: "1.6",
          }}
        >
          The page you're looking for doesn't exist or has been moved.
          {location.pathname !== "/" && (
            <>
              <br />
              <Text code style={{ fontSize: "14px" }}>
                {location.pathname}
              </Text>
            </>
          )}
        </Paragraph>
      </Card>
    </div>
  );
}
