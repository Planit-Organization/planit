// login signup home
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/calendar">Dashboard</Link>
      <Link to="/login"></Link>
      <Link to="/signup"></Link>
    </div>
  );
};

export default Navbar;
