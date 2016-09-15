import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    routerMiddleware,
    browserHistory
} from 'react-router-redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, routerMiddleware(browserHistory))
    );
}
