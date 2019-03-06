import React from 'react';

import IngredientList from './IngredientList';
import ResultTable from './ResultTable';
import getHexForEbc from '../util/getHexForEbc';

const maltColumns = [
    {id: 'quantity', name: 'Qty (g)', align:'right'},
    {id: 'percentage', name: '%', align:'right'},
    {id: 'name', name: 'Malt/Sugar', align:'left'},
    {id: 'ppg', name: 'Max Ppg', align:'right'},
    {id: 'color', name: 'Color (EBC)', align:'right'},
];

const attribs = [
    {id: 'computedOg', name: 'OG'},
    {id: 'computedColor', name: 'Color (EBC)', bgColor: getHexForEbc}
];


const MaltTable = ({brew}) => (
    <IngredientList
        title={'Malts & Sugars'}
        ingredient={'malts'}
        columns={maltColumns}
        brew={brew}>
            <ResultTable brew={brew} attribs={attribs}/>
        </IngredientList>);

export default MaltTable;