import { useForm } from "antd/lib/form/Form";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { passRules, usernameRules } from "helpers/authValidation";
import { useAuth } from "hooks/useAuth";
import {
  AuthFormWrapper, AuthButton, AuthFormStyled, AuthInput,
} from "./LoginFormStyle";

const LoginForm: React.FC = () => {
  const [form] = useForm();
  const { login } = useAuth();

  const onSubmit = async () => {
    try {
      const { username, password } = form.getFieldsValue();
      login(username, password);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthFormWrapper>
      <Typography.Title style={{ textAlign: "center" }}>Welcome!</Typography.Title>
      <AuthFormStyled onFinish={onSubmit} form={form} scrollToFirstError>
        <AuthFormStyled.Item validateFirst name="username" rules={usernameRules}>
          <AuthInput prefix={<UserOutlined />} placeholder="Username" />
        </AuthFormStyled.Item>
        <AuthFormStyled.Item validateFirst name="password" rules={passRules}>
          <AuthInput.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
        </AuthFormStyled.Item>
        <AuthButton htmlType="submit" type="primary">
          Войти
        </AuthButton>
      </AuthFormStyled>
    </AuthFormWrapper>
  );
};

export { LoginForm };
