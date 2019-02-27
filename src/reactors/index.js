import ric from 'ric-shim';

import brewSelectReactor from './brewSelect';

const init = (store, reactors) => {
    store.subscribe(() => {
        const state = store.getState();

        let nextReaction;
        reactors.some(reactor => {
            const result = reactor(state);
            if (result) {
                nextReaction = result;
                // returning true will stop
                // the loop
                return true;
            }
            return false;
        });
        if (nextReaction) {
            ric(() => {
                store.dispatch(nextReaction);
            });
        }
    });
};


const reactors = [
    brewSelectReactor
];

const initReactors = store => init(store, reactors);

export default initReactors;