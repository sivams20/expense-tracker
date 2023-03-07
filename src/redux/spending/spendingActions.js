import axios from "axios";
import {
  ADD_SPENDING_FAILURE,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS,
  FETCH_SPENDING_FAILURE,
  FETCH_SPENDING_REQUEST,
  FETCH_SPENDING_SUCCESS,
  UPDATE_SPENDING_FAILURE,
  UPDATE_SPENDING_REQUEST,
  UPDATE_SPENDING_SUCCESS,
  HIDE_SPENDING_SUCCESS_DIALOG
} from "./spendingActionTypes";

export const addSpendingRequest = (data) => ({
  type: ADD_SPENDING_REQUEST,
  payload: data
});

export const addSpendingSuccess = (data) => ({
  type: ADD_SPENDING_SUCCESS,
  payload: data
});

export const addSpendingFailure = (data) => ({
  type: ADD_SPENDING_FAILURE,
  payload: data
});

export const fetchSpendingRequest = () => ({
  type: FETCH_SPENDING_REQUEST
});

export const fetchSpendingSuccess = (data) => ({
  type: FETCH_SPENDING_SUCCESS,
  payload: data
});

export const fetchSpendingFailure = (data) => ({
  type: FETCH_SPENDING_FAILURE,
  payload: data
});

export const updateSpendingRequest = () => ({
  type: UPDATE_SPENDING_REQUEST
});

export const updateSpendingSuccess = (data) => ({
  type: UPDATE_SPENDING_SUCCESS,
  payload: data
});

export const updateSpendingFailure = () => ({
  type: UPDATE_SPENDING_FAILURE
});

export const hideSpendingSuccessDialog = () => ({
  type: HIDE_SPENDING_SUCCESS_DIALOG
});

export const addSpending = function (data) {
  return function (dispatch) {
    const url = "http://localhost:5000/spending/add";
    axios
      .post(url, data)
      .then((response) => {
        dispatch(addSpendingRequest);
        dispatch(addSpendingSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addSpendingFailure("Some error occured"));
      });
  };
};

export const fetchSpending = () => (dispatch) => {
  dispatch(fetchSpendingRequest());
  const url = "http://localhost:5000/spending/spendings";
  axios
    .get(url)
    .then((response) => {
      dispatch(fetchSpendingSuccess(response.data.spendings));
    })
    .catch((error) => {
      console.log(error);
      const errorMessage = error;
      dispatch(fetchSpendingFailure(errorMessage));
    });
};

export const updateSpending = function (data) {
  return function (dispatch) {
    const url = "http://localhost:5000/spending/update";
    axios
      .post(url, data)
      .then((response) => {
        dispatch(updateSpendingRequest);
        dispatch(updateSpendingSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateSpendingFailure("Some error occured"));
      });
  };
};
