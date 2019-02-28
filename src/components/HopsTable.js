import React from 'react';
import Grid from '@material-ui/core/Grid';

import Fieldset from './Fieldset';
import EditableTable from './EditableTable';

const hopColumns = [
    {id: 'quantity', name: 'Qty (g)', align:'right'},
    {id: 'name', name: 'Hop name', align:'left'},
    {id: 'alpha_acid', name: 'α Acid', align:'right'},
    {id: 'form', name: 'Form', align:'left'},
    {id: 'boil_time', name: 'Boil Time (m)', align:'right'},
];

const HopsTable = ({brew}) => (
    <Fieldset title={'Hops'}>
        <Grid container spacing={0}>
            <Grid item sm={8} xs={8}>
                <EditableTable 
                data={brew.hops}
                columns={hopColumns}/>
            </Grid>
        </Grid>
    </Fieldset>
);

export default HopsTable;