import {
  ADD_SPENDING_FAILURE,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS,
  FETCH_SPENDING_FAILURE,
  FETCH_SPENDING_REQUEST,
  FETCH_SPENDING_SUCCESS
} from "./spendingActionTypes";

const initialState = {
  loading: false,
  error: "",
  spendingsAdded: [],
  spendings: []
};

const spendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPENDING_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ADD_SPENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        spendingsAdded: [...state.spendingsAdded, action.payload]
      };

    case ADD_SPENDING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case FETCH_SPENDING_REQUEST:
      return {
        ...state,
        loading: true,
        error: action.payload
      };

    case FETCH_SPENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        spendings: action.payload
      };

    case FETCH_SPENDING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default spendingReducer;
