import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { setAuthToken } from './utils';

const INITIAL_STATE = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

let currentState = store.getState();

store.subscribe(() => {
    let previousState = currentState;
    currentState = store.getState();
    if (previousState.auth.token !== currentState.auth.token) {
        const token = currentState.auth.token;
        setAuthToken(token);
    }
});

export default store;