import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import initRouting from './routing';
import rootReducer from './reducers';
import initReactors from './reactors';
import App from './app/';
import api from './api/';


//log all actions
const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

const middleware = [
    logger,
    thunk.withExtraArgument(api),
];

const store = createStore(rootReducer, applyMiddleware(...middleware));

initReactors(store);
initRouting(store, window);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
