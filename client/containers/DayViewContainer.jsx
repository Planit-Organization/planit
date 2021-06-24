import { useParams } from 'react-router-dom';
import React from 'react';
import DayContainer from './DayContainer';
const DayViewContainer = ({renderDayView, date, votes, comments, setVotes, setComments, setTimeBlock, timeBlock, timeBlockKeys, setTimeBlockKeys }) => {
  if(renderDayView){
  return (
    <div>
      <p>{date}</p>
      <DayContainer 
      votes={votes} 
      comments={comments} 
      timeBlock={timeBlock} 
      setVotes={setVotes} 
      setComments={setComments} 
      setTimeBlock={setTimeBlock}
      timeBlockKeys={timeBlockKeys} 
      setTimeBlockKeys={setTimeBlockKeys}
      />
    </div>
  )
  } else {
    return (
      <div></div>
    )
  }
};

export default DayViewContainer;