import React from 'react';
import Grid from '@material-ui/core/Grid';

import Fieldset from './Fieldset';
import EditableTable from './EditableTable';

const additivesColumns = [
    {id: 'quantity', name: 'Qty (g)', align:'right'},
    {id: 'name', name: 'Additive name', align:'left'},
    {id: 'added_when', name: 'Added', align:'left'},
    {id: 'boil_time', name: 'Boil Time (m)', align:'right'},
];

const AdditivesTable = ({brew}) => (
    <Fieldset title={'Other Additives'}>
        <Grid container spacing={0}>
            <Grid item sm={8} xs={8}>
                <EditableTable 
                data={brew.additives}
                columns={additivesColumns}/>
            </Grid>
        </Grid>
    </Fieldset>
);

export default AdditivesTable;