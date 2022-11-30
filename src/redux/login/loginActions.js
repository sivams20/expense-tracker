import axios from "axios";
import {
  LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT,
} from "./loginActionTypes";

export const login = () => ({
  type: LOGIN,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (message) => ({
  type: LOGIN_FAILURE,
  payload: message,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginUser = (credential, navigate) => (dispatch) => {
  dispatch(login());
  const url = "http://localhost:5000/user/signin";
  axios.post(url, credential)
    .then((response) => {
      dispatch(loginSuccess(response.data.token));
      localStorage.setItem("token", response.data.token);
      navigate("spending");
    })
    .catch((error) => {
      console.log(error);
      const errorMessage = error;
      dispatch(loginFailure(errorMessage));
    });
};
