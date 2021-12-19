import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  //State
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
