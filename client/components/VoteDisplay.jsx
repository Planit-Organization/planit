import React from 'react';
const VoteDisplay = ({ votes, timeBlockKey }) => {
// check votes object against timeBlockKeys 


//Loop over votes keys (with object.keys)
//if element matches timeBlockKey value
//Push to votesList array
//Display votes list array
  return (
    <div>
      <ul>
      {votes}
      </ul>
    </div>
  ) 
}

export default VoteDisplay;