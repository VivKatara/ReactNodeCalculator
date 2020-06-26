import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import calculatorReducer from "../reducers/calculator";
import { AppActions } from "../types/actions";

export const rootReducer = combineReducers({
  calculatorState: calculatorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const initialState = {};

const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
