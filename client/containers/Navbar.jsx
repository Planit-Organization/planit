// login signup home
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink className="navLink" to="/login">
          Login Page
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
