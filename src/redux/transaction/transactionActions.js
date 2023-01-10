import {
  FETCH_TRANSACTION_FAILURE,
  FETCH_TRANSACTION_REQUEST,
  FETCH_TRANSACTION_SUCCESS
} from "./transactionActionTypes";

export const fetchTransactionRequest = () => ({
  type: FETCH_TRANSACTION_REQUEST
});

export const fetchTransactionSuccess = (transaction) => ({
  type: FETCH_TRANSACTION_SUCCESS,
  payload: transaction
});

export const fetchTransactionFailure = (transaction) => ({
  type: FETCH_TRANSACTION_FAILURE,
  payload: transaction
});

export const fetchTransaction = () => (dispatch) => {
  dispatch(fetchTransactionRequest());
  const url = "http://localhost:5000/transaction/transactions";
  axios
    .get(url)
    .then((response) => {
      dispatch(fetchTransactionSuccess(response.data.categories));
    })
    .catch((error) => {
      console.log(error);
      const errorMessage = error;
      dispatch(fetchTransactionFailure(errorMessage));
    });
};
