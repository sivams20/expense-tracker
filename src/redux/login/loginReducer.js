import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./loginActionTypes";

const initialState = {
  token: "",
  loading: false,
  isLoggedIn: false,
  error: "",
};

const loginReducer = (action, state = initialState) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        isLoggedIn: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
      };

    default:
      return state;
  }
};

export default loginReducer;
