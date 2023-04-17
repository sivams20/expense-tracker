import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";
import loginReducer from "./login/loginReducer";
import spendingReducer from "./spending/spendingReducer";
import signupReducer from "./signup/signupReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  category: categoryReducer,
  spending: spendingReducer
});

export default rootReducer;
