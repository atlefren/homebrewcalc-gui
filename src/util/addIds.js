import addId from './addId';
const addIds = list => list !== null 
    ? list.map(e => addId(e))
    : null;

export default addIds;