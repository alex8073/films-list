import {applyMiddleware, combineReducers, createStore} from 'redux';
import actorsReducer from './actorsReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    actorsPage: actorsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;