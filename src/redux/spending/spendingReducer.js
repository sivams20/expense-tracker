import {
  ADD_SPENDING_FAILURE,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS,
  FETCH_SPENDING_FAILURE,
  FETCH_SPENDING_REQUEST,
  FETCH_SPENDING_SUCCESS,
  HIDE_SPENDING_SUCCESS_DIALOG
} from "./spendingActionTypes";

const initialState = {
  loading: false,
  success: false,
  error: "",
  spendingsAdded: [],
  spendings: []
};

const spendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPENDING_REQUEST:
      return {
        ...state,
        success: false,
        error: "",
        loading: true
      };

    case ADD_SPENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: "",
        spendingsAdded: [...state.spendingsAdded, action.payload]
      };

    case ADD_SPENDING_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      };

    case FETCH_SPENDING_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: action.payload
      };

    case FETCH_SPENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        success: false,
        error: "",
        spendings: action.payload
      };

    case FETCH_SPENDING_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      };

    case HIDE_SPENDING_SUCCESS_DIALOG:
      return {
        ...state,
        success: false
      };

    default:
      return state;
  }
};

export default spendingReducer;
