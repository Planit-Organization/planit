import constants from "../constants/recActionTypes";

const initialState = {
  user: "example",
  recommendations: [
    {
      user: "user1",
      recommendation: "This is my recommendation",
      createdAt: "this date",
    },
  ],
  newRecommendation: "",
};

function recommendationReducer(state = initialState, action) {
  switch (action.type) {
    case constants.UPDATE_NEW_RECOMMENDATION:
      return {
        ...state,
        newRecommendation: action.payload,
      };
    case constants.ADD_RECOMMENDATION:
      return {
        ...state,
        recommendation: action.payload,
      };
    case constants.EDIT_RECOMMENDATION:
      return {
        ...state,
        recommendation: action.payload,
      };
    case constants.DELETE_RECOMMENDATION:
      return {
        ...state,
        recommendation: action.payload,
      };
    default:
      return state;
  }
}

export default recommendationReducer;
