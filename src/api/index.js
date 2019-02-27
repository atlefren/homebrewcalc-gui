const brew1 = {
    id: 1,
    name: 'Bleik Drammenser',
    brewer: 'Atle F. Sveen',
    style: 'ipa',
    batchSize: 5.5,
    boilTime: 90,
    brewhouseEfficiency: 75
};

const api = (path, method='GET', data={}) => {

    if (path === '/brews/1') {
        return new Promise((resolve, reject) => {
            resolve(brew1);
        });
    }

    return new Promise((resolve, reject) => {
        reject('meh');
    });

};

export default api;