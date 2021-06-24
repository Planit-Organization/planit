import React, { useState } from 'react';
import TimeBlock from '../components/TimeBlock';
const DayContainer = ({  date, votes, comments, setVotes, setComments, setTimeBlock, timeBlock, timeBlockKeys, setTimeBlockKeys }) => {
  const timeBlockList = [];
  if(timeBlockKeys){
  for(let i = 0; i < timeBlockKeys.length; i++){
    <TimeBlock 
    timeBlock={timeBlockKeys[i]} 
    setVotes={setVotes} 
    setComments={setComments} 
    votes={votes} 
    comments={comments}/>
  }
}
  const addTimeBlock = () => {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const time = `${startTime} - ${endTime}`;
    setTimeBlockKeys([...timeBlockKeys, time]);
    setTimeBlock(time);
  }
  return (
    <div>
      <input id='startTime' placeholder='Enter Start Time'></input>
      <input id='endTime' placeholder='Enter End Time'></input>
      <button onClick={addTimeBlock}>Add Time Block</button>
      {timeBlockList}
    </div>
  ) 
}

export default DayContainer;