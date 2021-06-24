import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import DashBoardContainer from "./DashBoardContainer";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import DashBoardContainer from "./DashBoardContainer";

const MainContainer = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route
          exact path = "/"
<<<<<<< HEAD
          component = {LandingPageContainer} //welcome page with Navbar (sign up/login)
        /> */}
        <Route
          path = "/" // /calendar/date -> todolsit
          component = {DashBoardContainer}
        />
=======
          // component = {LandingPageContainer} //welcome page with Navbar (sign up/login)
        />
        <Route
          path="/calendar" // /calendar/date -> todolsit
          component={DashBoardContainer}
        />


>>>>>>> dev
        <Route
          exact path = "/login"
          component = {LoginPage}
        />
        <Route
          exact path = "/register"
          component = {RegisterPage}
        />
        <Route
          exact path = "/signup"
          // component = {SignupContainer}
        />
      </Switch>
    </div>
  );
};


export default MainContainer;
