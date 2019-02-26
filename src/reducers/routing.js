import routeMatcher from '../app/routes';

const pathname = typeof window.location !== 'undefined'
    ? window.location.pathname
    : '/';

const initialState = routeMatcher(pathname);

const urlReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_URL') {
        return routeMatcher(action.payload);
    }
    return state;
};

export default urlReducer;