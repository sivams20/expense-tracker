import {
  ADD_SPENDING_FAILURE,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS,
  DELETE_SPENDING_FAILURE,
  DELETE_SPENDING_REQUEST,
  DELETE_SPENDING_SUCCESS,
  FETCH_SPENDING_FAILURE,
  FETCH_SPENDING_REQUEST,
  FETCH_SPENDING_SUCCESS,
  HIDE_SPENDING_SUCCESS_DIALOG,
  UPDATE_SPENDING_FAILURE,
  UPDATE_SPENDING_REQUEST,
  UPDATE_SPENDING_SUCCESS
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

    case UPDATE_SPENDING_REQUEST:
      return {
        ...state,
        success: false,
        error: "",
        loading: true
      };

    case UPDATE_SPENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: ""
      };

    case UPDATE_SPENDING_FAILURE:
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
        loading: true,
        success: false,
        error: action.payload
      };

    case HIDE_SPENDING_SUCCESS_DIALOG:
      return {
        ...state,
        success: false
      };

    case DELETE_SPENDING_REQUEST:
      return {
        ...state,
        loading: true
      };

    case DELETE_SPENDING_SUCCESS:
      return {
        ...state,
        spendings: state.spendings.filter(
          (item, index) => item._id !== action.payload.spendingId
        ),
        loading: false,
        success: true,
        error: ""
      };

    case DELETE_SPENDING_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default spendingReducer;
