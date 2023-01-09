import axios from "axios";
import {
  ADD_SPENDING_FAILURE,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS
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
