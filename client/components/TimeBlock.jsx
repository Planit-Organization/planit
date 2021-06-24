import React from 'react';
const TimeBlock = ({ timeBlockKey, votes, comments, setVotes, setComments }) => {

  const voteYes = () => {
    const updateVotes = votes;
    updateVotes[timeBlockKey] = 'Yes'
    setVotes(updateVotes)
  }
  const voteNo = () => {
    const updateVotes = votes;
    updateVotes[timeBlockKey] = 'No'
    setVotes(updateVotes)
  }

  const addComment = () => {
    const updateComments = comments;
    updateComments[timeBlockKey] = document.getElementById('comment').value
    setComments(updateComments)
  }

  return (
    <div>
      <button onClick={voteYes}>Vote Yes</button>
      <button onClick={voteNo}>Vote No</button>
      <input id='comment' placeholder='Add A Comment'></input>
    </div>
  ) 
}

export default TimeBlock;