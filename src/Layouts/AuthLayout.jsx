import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const AuthLayout = () => {
  return (
    <div className="w-2/3 mx-auto mt-6">
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto my-12 text-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
