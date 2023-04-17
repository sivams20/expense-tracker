import { LOGIN_FAILURE } from "../login/loginActionTypes";
import { SIGNUP_SUCCESS } from "./signupActionTypes";

const initialState = {
  successMessage: "",
  errorMessage: ""
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        successMessage: action.payload
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default signupReducer;
