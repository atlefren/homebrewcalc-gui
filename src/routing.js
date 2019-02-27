import {doUpdateUrl} from './actionCreators/routing';


const initRouting = (store, _window) => {
    store.dispatch(doUpdateUrl(_window.location.pathname));

    _window.addEventListener('popstate', () => {
        store.dispatch(doUpdateUrl(_window.location.pathname));
    });

    store.subscribe(() => {
        const {url} = store.getState().routing;
        if (_window.location.pathname !== url) {
            _window.history.pushState(null, '', url);
            document.body.scrollTop = 0;
        }
    });
};

export default initRouting;