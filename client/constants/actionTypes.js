// export const ADD_TRIP = 'ADD_TRIP';

/* {
  date: 0,
  timeBlock: [{
    eventName: "example event",
    // sort by start time when displaying on page
    startTime: '1:00pm',
    endTime: '2:00pm',
    proposedBy: 'lurbot',
    confirmed: false,
    yesVote: 0,
    noVote: 0,
    comments: [{
      user: 'example user',
      vote: 'yes',
      comment: "hell yea",
      time: '3:27pm'
    }]
  }],
  users: 0
} */

export default constants = {
  ADD_TIMEBLOCK: 'ADD_TIMEBLOCK',
  ADD_VOTE: 'ADD_YESVOTE',
  ADD_COMMENT: 'ADD_COMMENT',
  EDIT_TIMEBLOCK: 'EDIT_TIMEBLOCK',
  EDIT_VOTE: 'EDIT_YESVOTE',
  EDIT_COMMENT: 'EDIT_COMMENT',
  DELETE_TIMEBLOCK: 'DELETE_TIMEBLOCK',
  DELETE_COMMENT: 'DELETE_COMMENT'
}

const types = {
  ADD_TRIP: 'ADD_TRIP',
  LOGIN: 'LOGIN'
}

export default types

