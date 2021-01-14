import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import account from "./reducers/account";
import movies from "./reducers/movie";
import banners from "./reducers/banner";
import cinemaSystems from "./reducers/cinemaSystem";
import cinemas from "./reducers/cinema";
import showTimes from "./reducers/showTime";
import user from "./reducers/user";
import currentPage from "./reducers/page";
const RootReducer = combineReducers({
  account,
  banners,
  movies,
  cinemaSystems,
  cinemas,
  showTimes,
  userLogin: user,
  currentPage,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
