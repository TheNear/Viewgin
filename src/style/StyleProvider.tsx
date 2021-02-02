import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --main-bg-color: rgb(180, 227, 255);
  }

  body {
    font-family: 'Nunito', sans-serif;
  }

  #root, body, html {
    height: 100%;
    width: 100%;
  }
`;

export const GlobalStyleProvider: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
