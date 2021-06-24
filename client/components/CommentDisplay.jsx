import React from 'react';
const CommentDisplay = ({ comments, timeBlockKey }) => {
  const commentsList = [];
  const commentsCheck = Object.keys(comments)
  for(let i = 0; i < commentsCheck.length; i++){
    if(commentsCheck[i] === timeBlockKey){
      commentsList.push(comments[timeBlockKey])
    }
  }
  return (
    <div>
      <ul>
        {commentsList}
      </ul>
    </div>
  ) 
}

export default CommentDisplay;