import React from 'react';

import IngredientList from './IngredientList';
import ResultTable from './ResultTable';

const yeastColumns = [
    {id: 'name', name: 'Yeast name', align:'left'},
    {id: 'attenuation', name: 'Attenuation', align:'right'},
    {id: 'type', name: 'Form', align:'left'}
];

const attribs = [
    {id: 'computedFg', name: 'FG'},
    {id: 'computedAbv', name: 'ABV', suffix: '%'},
];

const YeastTable = ({brew}) => (
    <IngredientList 
        title={'Yeast'} 
        ingredient={'yeasts'}
        columns={yeastColumns}
        brew={brew}>
        <ResultTable brew={brew} attribs={attribs}/>
    </IngredientList>
);

export default YeastTable;