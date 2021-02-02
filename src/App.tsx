import { Charts } from "pages/Charts/Charts";
import { Auth } from "pages/Auth/Auth";
import { ProtectedRoute } from "HoC/ProtectedRoute";
import {
  BrowserRouter, Redirect, Route, Switch,
} from "react-router-dom";
import React from "react";
import { MainWrapper } from "./AppStyle";

const App: React.FC = () => {
  return (
    <MainWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Auth} />
          <ProtectedRoute path="/" component={Charts} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </MainWrapper>
  );
};

export { App };
