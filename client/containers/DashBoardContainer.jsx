import React, { useState }from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CalendarContainer from './CalendarContainer';
import RecommendationContainer from "./RecommendationContainer";
import DayViewContainer from "./DayViewContainer";
import { render } from 'react-dom';

const DashBoardContainer = () => {
  let renderDayView = false
  const { path } = useRouteMatch();
  const [date, setDate] = useState('')
  const [votes, setVotes] = useState({})
  const [comments, setComments] = useState({})
  const [timeBlock, setTimeBlock] = useState({})
  const [timeBlockKeys, setTimeBlockKeys] = useState({})
  if(date !== null){
    renderDayView = true;
  }
  return (
    <div>
      <Switch>
        <Route exact path={`${path}/`}>
          <CalendarContainer setDate={setDate} />
          <RecommendationContainer />
          <DayViewContainer 
          renderDayView={renderDayView} 
          date={date} 
          comments={comments} 
          setComments={setComments}
          votes={votes}
          setVotes={setVotes}
          />
        </Route>
        <Route path ={`${path}/:date`}
        component = {DayViewContainer}
      />
      </Switch>
    </div>
  );
};

export default DashBoardContainer;
