import React from "react";
import { MainWrapper } from "./AppStyle";
import Loader from "../../assets/loader.svg";
import image from "../../assets/antd.png";

const App: React.FC = () => {
  return (
    <MainWrapper>
      <Loader />
      <img src={image} />
    </MainWrapper>
  );
};

export { App };
