import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./NavBar";
import DashBoardContainer from "./DashBoardContainer";

const MainContainer = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route
          exact path = "/"
          component = {LandingPageContainer} //welcome page with Navbar (sign up/login)
        />
        <Route
          path="/calendar" // /calendar/date -> todolsit
          component={DashBoardContainer}
        />
        <Route
          exact path = "/login"
          component = {LoginContainer}
        />
        <Route
          exact path = "/signup"
          component = {SignupContainer}
        />
      </Switch>
    </div>
  );
};

export default MainContainer;
