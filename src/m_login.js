import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./mobile_home";
import Signup from "./m_signup";

function UserRoutes({ match }) {
  return (
    <>
      <Routes>
        
        <Route path="/m_login" element={<Login />} />
        <Route path="/m_signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default UserRoutes;