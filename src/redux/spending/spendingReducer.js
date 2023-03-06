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
  success: "",
  error: "",
  spendingsAdded: [],
  spendings: []
};

const spendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPENDING_REQUEST:
      return {
        ...state,
        success: "",
        error: "",
        loading: true
      };

    case ADD_SPENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        error: "",
        spendingsAdded: [...state.spendingsAdded, action.payload]
      };

    case ADD_SPENDING_FAILURE:
      return {
        ...state,
        loading: false,
        success: "",
        error: action.payload
      };

    case FETCH_SPENDING_REQUEST:
      return {
        ...state,
        loading: true,
        success: "",
        error: action.payload
      };

    case FETCH_SPENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "",
        error: "",
        spendings: action.payload
      };

    case FETCH_SPENDING_FAILURE:
      return {
        ...state,
        loading: false,
        success: "",
        error: action.payload
      };

    default:
      return state;
  }
};

export default spendingReducer;
