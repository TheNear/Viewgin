import { GlobalStyleProvider } from "@style/StyleProvider";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyleProvider>
      <App />
    </GlobalStyleProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
