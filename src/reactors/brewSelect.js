import {doSelectBrew} from '../actionCreators/brew';
import {getCurrentBrew} from '../selectors/brew';

const brewSelectReactor = (state) => {
    
    if (state.routing.pattern !== '/brews/:id') {
        return;
    }
    const current = getCurrentBrew(state);
    const brewId = parseInt(state.routing.params.id, 10);
    if (current !== brewId) {
        return doSelectBrew(brewId);
    }
};

export default brewSelectReactor;