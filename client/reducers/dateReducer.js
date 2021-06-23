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

const marketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.
  }
};

export default marketsReducer;