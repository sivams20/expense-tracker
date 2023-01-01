import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";
import loginReducer from "./login/loginReducer";
import spendingReducer from "./transaction/spendingReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  category: categoryReducer,
  spending: spendingReducer
});

export default rootReducer;
