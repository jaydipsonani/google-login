// src/components/ProtectedRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "./firebase";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = auth.currentUser;
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
