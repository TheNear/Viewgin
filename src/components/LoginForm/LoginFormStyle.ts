import styled from "styled-components";
import { Button, Form, Input } from "antd";

export const AuthFormWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
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
