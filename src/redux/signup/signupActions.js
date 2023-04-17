import axios from "axios";
import { SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./signupActionTypes";

export const signupSuccess = (token) => ({
  type: SIGNUP_SUCCESS,
  payload: token
});

export const signupFailure = (message) => ({
  type: SIGNUP_FAILURE,
  payload: message
});

export const signupUser = (credential) => (dispatch) => {
  const url = "http://localhost:5000/user/signup";
  axios
    .post(url, credential)
    .then((response) => {
      dispatch(signupSuccess(response.data.message));
    })
    .catch((error) => {
      console.log(error);
      const errorMessage = error;
      dispatch(signupFailure(errorMessage));
    });
};
