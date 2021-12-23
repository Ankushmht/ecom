import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./redux/reducers/productReducer";
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./redux/reducers/userReducers";

const reducers = combineReducers({
  products: productReducer,
  user: userReducer,
  allUsers: allUsersReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  userDetails: userDetailsReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
