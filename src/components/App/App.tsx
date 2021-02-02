import React from "react";
import { Wrap } from "@components/Wrap/Wrap";
import { MainWrapper } from "./AppStyle";

const App: React.FC = () => {
  return (
    <MainWrapper>
      <Wrap />
    </MainWrapper>
  );
};

export { App };
