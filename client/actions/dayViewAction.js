import * as types from '../constants/actionTypes';

export const addTimeBlock = data => ({
  type: types.ADD_TIMEBLOCK,
  payload: data
});

export const addVote = data => ({
  type: types.ADD_NOVOTE,
  payload: data // startTime, yesVote or noVote
});

export const addComment = data => ({
  type: types.ADD_COMMENT,
  payload: data // startTime and content of comment
});

export const editTimeBlock = data => ({
  type: types.EDIT_TIMEBLOCK,
  payload: data
});

export const editVote = data => ({
  type: types.EDIT_YESVOTE,
  payload: data
});

export const editComment = data => ({
  type: types.EDIT_COMMENT,
  payload: data
});

export const deleteTimeBlock = data => ({
  type: types.DELETE_TIMEBLOCK,
  payload: data
});

export const deleteComment = data => ({
  type: types.DELETE_COMMENT,
  payload: data
});