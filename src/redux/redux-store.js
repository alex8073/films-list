import { applyMiddleware, combineReducers, createStore } from "redux";
import filmsReducer from "./films-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    filmsPage: filmsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
