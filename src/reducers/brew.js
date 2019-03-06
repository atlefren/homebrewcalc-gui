import addIds from '../util/addIds';
import recalculateBrew from '../util/recalculateBrew';

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
            brew: {
                ...action.payload.brew,
                malts: addIds(action.payload.brew.malts),
                hops: addIds(action.payload.brew.hops),
                yeasts: addIds(action.payload.brew.yeasts),
            },
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
        const newBrew =  {
            ...state.brew,
            [action.payload.prop]: action.payload.value
        };
        return {
            ...state,
            brew: recalculateBrew(newBrew)
        };
    }

    return state;
};

export default brewReducer;