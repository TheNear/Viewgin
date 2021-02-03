import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { defaultBoxStyle } from "@style/common";

export const AuthFormWrapper = styled.div`
  ${defaultBoxStyle}
  min-width: 300px;
`;

export const AuthFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const AuthInput = styled(Input)`

`;

export const AuthButton = styled(Button)`
  width: 100%;
  margin-bottom: 1rem;
`;
