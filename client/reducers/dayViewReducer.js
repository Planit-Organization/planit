import * as types from '../constants/actionTypes';

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

const dayViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TIMEBLOCK:
      const newTimeBlock = {
        confirmed: false,
        yesVote: 1,
        noVote: 0,
        comments: [],
        ...action.payload
      };
    // push new block object and then sort timeBlock array
    timeBlock.push(newTimeBlock);
    timeBlock.sort((a, b) => a.startTime - b.startTime);
      return {
        ...state,
        // add an object to the timeBlock array
        timeBlock:  newTimeBlock,
      };
    // single vote type, send whether yes or no vote in payload
    case types.ADD_VOTE:
      const newTimeBlock = [];
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          // if yes vote, increment yesVotes
          if (action.payload.vote === true) {
            newTimeBlock.push({
              ...block,
              yesVote: block.yesVote + 1
            })
          } else {
            newTimeBlock.push({
              ...block,
              noVote: block.noVote + 1
            });
          } 
        } else newTimeBlock.push(block);
      });

    case types.ADD_COMMENT:
      const newTimeBlock = [];
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          block.comments.push(action.payload.comment);
        } 
        newTimeBlock.push(block);
     });
     return {
       ...state,
       timeBlock: newTimeBlock,
     };

    case types.EDIT_TIMEBLOCK:
      return {
        ...state,
        timeBlock: action.payload
      };

    case types.EDIT_VOTE:
      const newTimeBlock = [];
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          // if yes vote, increment yesVotes
          if (action.payload.vote === true) {
            newTimeBlock.push({
              ...block,
              noVote: block.noVote - 1,
              yesVote: block.yesVote + 1
            })
          } else {
            newTimeBlock.push({
              ...block,
              noVote: block.noVote + 1,
              yesVote: block.yesVote - 1
            });
          } 
        } else newTimeBlock.push(block);
      });

    case types.EDIT_COMMENT:
      const newTimeBlock = [];
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          block.comments.push(action.payload.comment);
        } 
        newTimeBlock.push(block);
     });
     return {
       ...state,
       timeBlock: newTimeBlock,
     };

    case types.DELETE_TIMEBLOCK:
      const newTimeBlock = state.timeBlock;
      state.newTimeBlock.filter(block => block.startTime !== action.payload);
     return {
       ...state,
       timeBlock: newTimeBlock,
     };

    case types.DELETE_COMMENT:
      const newTimeBlock = [];
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          block.comments.filter(comment => comment.time !== action.payload.time);
        }
        newTimeBlock.push(block);
      });
      return {
        ...state,
        timeBlock: newTimeBlock
      };
      
    default:
      return state;
  }
};

export default marketsReducer;