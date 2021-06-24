import  types from '../constants/actionTypes'

export const initialState = {
  date: "",

}

const calendarReducer = (state = initialState, action) => {
  switch(action.types){
    case types.SELECT_DAY:
      const date = action.payload.date;
      return {
        ...state,
        date
      }
      default: {
        return state;
      }
  }
}

export default calendarReducer;