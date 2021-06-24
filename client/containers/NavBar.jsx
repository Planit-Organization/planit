// login signup home
import React from "react";

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <Link id = "home" to="/">Home</Link>
      <Link id = "dashboard" to="/calendar">Dashboard</Link>
      <Link id = "login" to="/login">Login Page</Link>
      <Link id = "register" to="/register">Register Page</Link>
    </div>
  );
};


export default Navbar;

