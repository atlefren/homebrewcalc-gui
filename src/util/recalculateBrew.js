import {
    computeAbv,
    computeBitterness,
    computeColor,
    computeFG,
    computeGravity
} from 'homebrewcalc';


const computations = {
    computedOg: {op: computeGravity, params: ['batchSize', 'brewhouseEfficiency', 'malts']},
    computedFg: {op: computeFG , params: ['computedOg', 'yeasts']},
    computedAbv: {op: computeAbv , params: ['computedOg', 'computedFg']},
    computedIbu: {op: computeBitterness , params: ['computedOg', 'batchSize', 'hops']},
    computedColor: {op: computeColor, params: ['batchSize', 'malts']}
};

const getArgs = (brew, args) => args.map(arg => brew[arg]);

const recalculateBrew = brew => Object.entries(computations).reduce(
    (acc, [propName, data]) => 
        ({...acc, [propName]: data.op(...getArgs(acc, data.params))})
    , brew);

export default recalculateBrew;