import constants from "../constants/actionTypes";

// updates state for onChange of recommendation
export const updateNewRecommendation = (e) => ({
  type: constants.UPDATE_NEW_RECOMMENDATION,
  payload: e.target.value,
});
// adds recommendation to database then sends to reducer to update state
export const addRecommendation = () => (dispatch, getState) => {
  const recommendation = getState().recommendation.newRecommendation;
  //change getState when user is finished
  const user = getState().authentication.user;
  fetch("/recommendations/add", {
    method: "POST",
    headers: {
      "Content-Type": "applcation/json",
    },
    body: JSON.stringify({ newRecommendation: recommendation, user: user }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: constants.ADD_RECOMMENDATION,
        payload: data,
      });
    })
    .catch((e) => console.log("Error when adding recommendation: ", e));
};
//  need to add a way to filter for specific recommendation
export const editRecommendation = (data) => (dispatch) => {
  const recommendation = data.recommendation;
  //change getState when user is finished
  const user = getState().authentication.user;
  fetch("/recommendations/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "applcation/json",
    },
    body: JSON.stringify({ recommendation: recommendation, user: user }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: constants.EDIT_RECOMMENDATION,
        payload: data,
      });
    })
    .catch((e) => console.log("Error when adding recommendation: ", e));
};

export const deleteRecommendation = (data) => (dispatch) => {
  const recommendation = data.recommendation;
  //change getState when user is finished
  const user = getState().authentication.user;
  fetch("/recommendations/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "applcation/json",
    },
    body: JSON.stringify({ recommendation: recommendation, user: user }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: constants.ADD_RECOMMENDATION,
        payload: data,
      });
    })
    .catch((e) => console.log("Error when adding recommendation: ", e));
};
// wait for alura and derek
export const sendRecommendation = () => (dispatch) => {

};
