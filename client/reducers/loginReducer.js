
import  types from '../constants/actionTypes'

export const initialLoginState = {
  isVerifed: false,
  userInfo: {
    username: '',
    email: ''
  }
};

const loginReducer = (state = initialLoginState, action) => {
  switch(action.types){

    case types.LOGIN:
      const loggedInUser = {
        isVerifed: true,
        userInfo: {
          username: action.payload.username,
          email: action.payload.email
        }
      }
    return {
      ...state,
      ...loggedInUser

    }

    case types.LOGOUT:

    return {
      ...state,
      isVerifed: false,
      userInfo: {
        username: '',
         email: ''
      }
    }
  }
}

export default loginReducer