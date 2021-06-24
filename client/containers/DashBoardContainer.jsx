<<<<<<< HEAD
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CalendarContainer from './CalendarContainer';
=======
import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import RecommendationContainer from "./RecommendationContainer";
>>>>>>> dev

const DashBoardContainer = (props) => {
  const { path } = useRouteMatch();
<<<<<<< HEAD
  return (<div>
    <Switch>
      <Route exact path={`${path}/`}>
        <CalendarContainer />
        {/* <RecommendationContainer /> */}
      </Route>
      {/* <Route path ={`${path}/:date`}
        // component = {DayViewContainer}
      /> */}
    </Switch>
=======
  return (
    <div>
      <Switch>
        <Route exact path={`${path}/`}>
          <CalendarContainer />
          <RecommendationContainer />
        </Route>
        <Route path ={`${path}/:date`}
        component = {DayViewContainer}
      />
      </Switch>
    </div>
  );
};
>>>>>>> dev

export default DashBoardContainer;
