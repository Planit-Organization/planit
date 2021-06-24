import types from '../constants/dayActionTypes';

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
  const newTimeBlocks = [];
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
        timeBlock: newTimeBlock,
      };
    // single vote type, send whether yes or no vote in payload
    case types.ADD_VOTE:
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          // if yes vote, increment yesVotes
          if (action.payload.vote === true) {
            newTimeBlocks.push({
              ...block,
              yesVote: block.yesVote + 1
            })
          } else {
            newTimeBlocks.push({
              ...block,
              noVote: block.noVote + 1
            });
          } 
        } else newTimeBlocks.push(block);
      });

    case types.ADD_COMMENT:
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          block.comments.push(action.payload.comment);
        } 
        newTimeBlocks.push(block);
     });
     return {
       ...state,
       timeBlock: newTimeBlocks,
     };

    case types.EDIT_TIMEBLOCK:
      return {
        ...state,
        timeBlock: action.payload
      };

    case types.EDIT_VOTE:
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          // if yes vote, increment yesVotes
          if (action.payload.vote === true) {
            newTimeBlocks.push({
              ...block,
              noVote: block.noVote - 1,
              yesVote: block.yesVote + 1
            })
          } else {
            newTimeBlocks.push({
              ...block,
              noVote: block.noVote + 1,
              yesVote: block.yesVote - 1
            });
          } 
        } else newTimeBlocks.push(block);
      });

    case types.EDIT_COMMENT:
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          block.comments.push(action.payload.comment);
        } 
        newTimeBlocks.push(block);
     });
     return {
       ...state,
       timeBlock: newTimeBlocks,
     };

    case types.DELETE_TIMEBLOCK:
      const newTimeBlockss = state.timeBlock;
      state.newTimeBlockss.filter(block => block.startTime !== action.payload);
     return {
       ...state,
       timeBlock: newTimeBlockss,
     };

    case types.DELETE_COMMENT:
      state.timeBlock.forEach(block => {
        if (block.startTime === action.payload.startTime) {
          block.comments.filter(comment => comment.time !== action.payload.time);
        }
        newTimeBlocks.push(block);
      });
      return {
        ...state,
        timeBlock: newTimeBlocks
      };
      
    default:
      return state;
  }
};

export default dayViewReducer;