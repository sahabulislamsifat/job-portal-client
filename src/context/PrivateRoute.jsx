import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/signIn"} state={location?.pathname}></Navigate>;
};

export default PrivateRoute;