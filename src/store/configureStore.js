import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/root-reducer/root-reducer';

export default (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
}