import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App/App";
import { GlobalStyle } from "./style/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
