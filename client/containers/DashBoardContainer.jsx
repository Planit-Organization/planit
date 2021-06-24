import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CalendarContainer from './CalendarContainer';
import RecommendationContainer from "./RecommendationContainer";

const DashBoardContainer = (props) => {
  const { path } = useRouteMatch();
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

export default DashBoardContainer;
