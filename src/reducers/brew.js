const initialState = {
    brewId: null,
    isFetching: false,
    isEditable: false,
    brew: null,
    error: false
};

const brewReducer = (state = initialState, action) => {

    if (action.type === 'SELECT_BREW') {
        return {
            ...state,
            brewId: action.payload.brewId
        };
    }

    if (action.type === 'FETCH_BREW_STARTED' && action.payload.brewId === state.brewId) {
        return {
            ...state,
            isFetching: true
        };
    }

    if (action.type === 'FETCH_BREW_COMPLETED') {
        return {
            ...state,
            brew: action.payload.brew,
            isFetching: false,
            isEditable: true
        };
    }

    if (action.type === 'FETCH_BREW_FAILED') {
        return {
            ...state,
            isFetching: false,
            error: true
        };
    }

    if (action.type === 'UPDATE_BREW' && action.payload.brewId === state.brewId) {
        return {
            ...state,
            brew: {
                ...state.brew,
                [action.payload.prop]: action.payload.value
            }
        };
    }

    return state;
};

export default brewReducer;