import React from 'react';

import IngredientList from './IngredientList';
import ResultTable from './ResultTable';

const hopColumns = [
    {id: 'quantity', name: 'Qty (g)', align:'right'},
    {id: 'name', name: 'Hop name', align:'left'},
    {id: 'alphaAcid', name: 'α Acid', align:'right'},
    {id: 'form', name: 'Form', align:'left'},
    {id: 'boilTime', name: 'Boil Time (m)', align:'right'},
];

const attribs = [
    {id: 'computedIbu', name: 'IBU'}
];

const HopsTable = ({brew}) => (
    <IngredientList
        title={'Hops'}
        ingredient={'hops'}
        columns={hopColumns}
        brew={brew}>
        <ResultTable brew={brew} attribs={attribs}/>
    </IngredientList>);

export default HopsTable;