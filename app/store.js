import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from './reducers';

let middleware;

if (process && process.env && (process.env.NODE_ENV === 'production')) {
    middleware = applyMiddleware(thunk, promise, apiMiddleware);
} else {
    middleware = applyMiddleware(thunk, promise, apiMiddleware, logger);
}

const initialState = {}

export default createStore(rootReducer, initialState, middleware);
