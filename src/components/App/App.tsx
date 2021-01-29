import React from "react";
import { Wrap } from "@components/Wrap/Wrap";
import Loader from "@img/loader.svg";
import image from "@img/antd.png";
import { MainWrapper } from "./AppStyle";

// const Wrap = React.lazy(() => import("../Wrap/Wrap"));

const App: React.FC = () => {
  return (
    <MainWrapper>
      <Loader />
      <Wrap />
      <img src={image} alt="some" />
    </MainWrapper>
  );
};

export { App };
