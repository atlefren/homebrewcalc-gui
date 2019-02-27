
const selectBrew = brewId => ({
    type: 'SELECT_BREW',
    payload: {brewId: brewId}
});


const startFetchBrew = brewId => ({
    type: 'FETCH_BREW_STARTED',
    payload: {brewId: brewId}
});

const doSelectBrew = brewId => {
    return (dispatch, getState, api) => {
        dispatch(selectBrew(brewId));
        dispatch(startFetchBrew(brewId));

        api(`/brews/${brewId}`).then(
            response => {
                dispatch({
                    type: 'FETCH_BREW_COMPLETED',
                    payload: {brew: response}
                });
            },
            error => {
                dispatch({
                    type: 'FETCH_BREW_FAILED',
                    payload: {error}
                });
            }
        );
    };
}

export {doSelectBrew};

const doUpdateBrew = (brewId, prop, value) => ({
    type: 'UPDATE_BREW',
    payload: {
        brewId,
        prop,
        value
    }
});

export {doUpdateBrew}