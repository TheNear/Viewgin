import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = ({ component: Component, path }) => {
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }

  return <Route component={Component} path={path} />;
};

export { ProtectedRoute };
