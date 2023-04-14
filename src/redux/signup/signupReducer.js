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
