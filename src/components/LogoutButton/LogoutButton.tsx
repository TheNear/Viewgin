import { ExportOutlined } from "@ant-design/icons";
import React from "react";
import { useAuth } from "hooks/useAuth";
import { StyledButton } from "./LogoutButtonStyle";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  return <StyledButton onClick={logout} size="large" type="primary" shape="circle" icon={<ExportOutlined />} />;
};

export { LogoutButton };
