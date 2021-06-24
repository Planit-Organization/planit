import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import DashBoardContainer from "./DashBoardContainer";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";

<<<<<<< HEAD
const MainContainer = props => {


  return (<div>
    {/* <Navbar></Navbar> */}
     <Switch>
=======
const MainContainer = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
>>>>>>> dev
        <Route
          exact path = "/"
          // component = {LandingPageContainer} //welcome page with Navbar (sign up/login)
        />
        <Route
<<<<<<< HEAD
          path = "/calendar" // /calendar/date -> todolsit
          // component = {DashboardContainer}
=======
          path="/calendar" // /calendar/date -> todolsit
          component={DashBoardContainer}
>>>>>>> dev
        />


        <Route
          exact path = "/login"
<<<<<<< HEAD
          // component = {LoginContainer}
=======
          component = {LoginPage}
        />
        <Route
          exact path = "/register"
          component = {RegisterPage}
>>>>>>> dev
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
