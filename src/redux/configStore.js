import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { BannerReducer } from "./reducers/BannerReducer";

const rootReducer = combineReducers({
  //State
  BannerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
