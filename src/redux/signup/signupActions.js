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
