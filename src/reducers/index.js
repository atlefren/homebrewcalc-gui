import {combineReducers} from 'redux';

import urlReducer from './routing';

const rootReducer = combineReducers({
    appTime: Date.now,
    routing: urlReducer
});

export default rootReducer;