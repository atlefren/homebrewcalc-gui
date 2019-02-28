//https://stackoverflow.com/a/2117523/1328635
const uuidv4 = () =>
    ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
       // eslint-disable-next-line no-mixed-operators
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );

const addId = obj => obj._id === null
    ? obj
    : {...obj, _id: uuidv4()};

export default addId;