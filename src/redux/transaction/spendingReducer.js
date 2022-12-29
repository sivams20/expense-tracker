import {
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS
} from "./spendingActionTypes";

const initialState = {
  loading: false,
  error: "",
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
        spendings: action.payload
      };

    case ADD_SPENDING_REQUEST:
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
