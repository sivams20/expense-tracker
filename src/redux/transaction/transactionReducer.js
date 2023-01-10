import {
  FETCH_TRANSACTION_FAILURE,
  FETCH_TRANSACTION_REQUEST,
  FETCH_TRANSACTION_SUCCESS
} from "./transactionActionTypes";

const initialState = {
  transactions: [],
  loading: false,
  error: ""
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        transactions: action.payload
      };

    case FETCH_TRANSACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default transactionReducer;
