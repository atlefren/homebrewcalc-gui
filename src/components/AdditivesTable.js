import React from 'react';
import IngredientList from './IngredientList';

const additivesColumns = [
    {id: 'quantity', name: 'Qty (g)', align:'right'},
    {id: 'name', name: 'Additive name', align:'left'},
    {id: 'added_when', name: 'Added', align:'left'},
    {id: 'boil_time', name: 'Boil Time (m)', align:'right'},
];

const AdditivesTable = ({brew}) => (
    <IngredientList
        title={'Other Additives'} 
        ingredient={'additives'}
        brew={brew}
        columns={additivesColumns}/>
);

export default AdditivesTable;