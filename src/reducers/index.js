import {combineReducers} from 'redux';

import urlReducer from './routing';
import brewReducer from './brew';

const rootReducer = combineReducers({
    appTime: Date.now,
    routing: urlReducer,
    brew: brewReducer
});

export default rootReducer;