const colors = [
    {'rgb': '250,250,160', 'srm': 1},
    {'rgb': '250,250,105', 'srm': 2},
    {'rgb': '245,246,50', 'srm': 3},
    {'rgb': '235,228,47', 'srm': 4},
    {'rgb': '225,208,50', 'srm': 5},
    {'rgb': '215,188,52', 'srm': 6},
    {'rgb': '205,168,55', 'srm': 7},
    {'rgb': '198,148,56', 'srm': 8},
    {'rgb': '193,136,56', 'srm': 9},
    {'rgb': '192,129,56', 'srm': 10},
    {'rgb': '192,121,56', 'srm': 11},
    {'rgb': '192,114,56', 'srm': 12},
    {'rgb': '190,106,56', 'srm': 13},
    {'rgb': '180,99,56', 'srm': 14},
    {'rgb': '167,91,54', 'srm': 15},
    {'rgb': '152,84,51', 'srm': 16},
    {'rgb': '138,75,48', 'srm': 17},
    {'rgb': '124,68,41', 'srm': 18},
    {'rgb': '109,60,34', 'srm': 19},
    {'rgb': '95,53,23', 'srm': 20},
    {'rgb': '81,45,11', 'srm': 21},
    {'rgb': '67,38,12', 'srm': 22},
    {'rgb': '52,30,17', 'srm': 23},
    {'rgb': '38,23,22', 'srm': 24},
    {'rgb': '33,19,18', 'srm': 25},
    {'rgb': '28,16,15', 'srm': 26},
    {'rgb': '23,13,12', 'srm': 27},
    {'rgb': '18,9,8', 'srm': 28},
    {'rgb': '13,6,5', 'srm': 29},
    {'rgb': '8,3,2', 'srm': 30},
    {'rgb': '6,2,1', 'srm': 31}
];

const isNumber = val => (val === '')
    ? false
    : !isNaN(val);


const getHexForEbc = (ebc) => {

    if (!isNumber(ebc)) {
        return null;
    }

    var input = ebc / 2;

    if (input < 1) {
        input = 1;
    } else if (input > 31) {
        input = 31;
    }

    input = Math.round(input);

    return colors.find(color => color.srm === input).rgb;
}

export default getHexForEbc;