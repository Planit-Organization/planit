import * as types from '../constants/actionTypes';

// {
//   currentUser: 'poofywater',
//   date: 0,
//   timeBlock: [{
//     eventName: "example event",
//     // sort by start time when displaying on page
//     startTime: '1:00pm',
//     endTime: '2:00pm',
//     proposedBy: 'lurbot',
//     confirmed: false,
//     yesVote: 0,
//     noVote: 0,
//     comments: [{
//       user: 'example user',
//       vote: 'yes',
//       comment: "hell yea",
//       time: '3:27pm'
//     }]
//   }],
//   users: 0
// }

const initialState = {
  currentUser: '',
  date: null,
  timeBlock: [{
    eventName: '',
    // sort by start time when displaying on page
    startTime: '',
    endTime: '',
    proposedBy: '',
    confirmed: false,
    yesVote: 0,
    noVote: 0,
    comments: [{
      user: '',
      vote: '',
      comment: '',
      time: ''
    }]
  }],
  users: 0
};

// filter vote from comment to determine yesVote/noVote count

// ADD_TIMEBLOCK: 'ADD_TIMEBLOCK',
//   ADD_YESVOTE: 'ADD_YESVOTE',
//   ADD_NOVOTE: 'ADD_NOVOTE',
//   ADD_COMMENT: 'ADD_COMMENT',
//   EDIT_TIMEBLOCK: 'EDIT_TIMEBLOCK',
//   EDIT_YESVOTE: 'EDIT_YESVOTE',
//   EDIT_NOVOTE: 'EDIT_NOVOTE',
//   EDIT_COMMENT: 'EDIT_COMMENT',
//   DELETE_TIMEBLOCK: 'DELETE_TIMEBLOCK',
//   DELETE_COMMENT: 'DELETE_COMMENT'

const marketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.
  }
};

export default marketsReducer;