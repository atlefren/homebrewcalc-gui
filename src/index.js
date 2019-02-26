import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import initRouting from './routing';
import rootReducer from './reducers';
import App from './app/';


//log all actions
const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

const middleware = [
    logger
];

const store = createStore(rootReducer, applyMiddleware(...middleware));

initRouting(store, window);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
