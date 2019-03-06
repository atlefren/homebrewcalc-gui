const brew1 = {
    id: 1,
    name: 'Bleik Drammenser',
    brewer: 'Atle F. Sveen',
    style: 'ipa',
    batchSize: 5.5,
    boilTime: 90,
    brewhouseEfficiency: 75,
    malts: [
        {
            "percentage": 83.3,
            "color": 8,
            "name": "Pale Ale Malt (Muntons)",
            "ppg": 38,
            "quantity": 1000
        },
        {
            "percentage": 12.5,
            "color": 15,
            "name": "Munchener Light (Castle Malting)",
            "ppg": 35,
            "quantity": 150
        },
        {
            "percentage": 4.2,
            "color": 120,
            "name": "Crystal Malt (Muntons)",
            "ppg": 34,
            "quantity": 50
        }
    ],
    hops: [
        {
            "form": "pellets",
            "name": "Cascade (U.S.)",
            "alphaAcid": 5.8,
            "quantity": 5,
            "boilTime": 90
        },
        {
            "form": "pellets",
            "name": "Galena",
            "alphaAcid": 13,
            "quantity": 4,
            "boilTime": 10
        },
        {
            "form": "pellets",
            "name": "Galena",
            "alphaAcid": 13,
            "quantity": 4,
            "boilTime": 1
        }
    ],
    yeasts: [
        {
            "type": "dry",
            "name": "Safale S-04 Dry Ale ",
            "attenuation": "72"
        }
    ],
    additives: [],
    "computedOg": 1.051,
    "computedFg": 1.014,
    "computedColor": 17,
    "computedIbu": 27,
    "computedAbv": 5
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