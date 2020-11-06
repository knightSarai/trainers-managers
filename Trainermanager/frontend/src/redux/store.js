import { createStore, applyMiddleware } from 'redux';
/**Middlewares */
import thunk from 'redux-thunk';
import reducer from './root.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const middlewares = [thunk]

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares))
)

export default store;