import React from 'react';
import Grid from '@material-ui/core/Grid';

import Fieldset from './Fieldset';
import EditableTable from './EditableTable';

const maltColumns = [
    {id: 'quantity', name: 'Qty (g)', align:'right'},
    {id: 'percentage', name: '%', align:'right'},
    {id: 'name', name: 'Malt/Sugar', align:'left'},
    {id: 'ppg', name: 'Max Ppg', align:'right'},
    {id: 'color', name: 'Color (EBC)', align:'right'},
];

const MaltTable = ({brew}) => (
    <Fieldset title={'Malts & Sugars'}>
        <Grid container spacing={0}>
            <Grid item sm={8} xs={8}>
                <EditableTable 
                data={brew.malts}
                columns={maltColumns}/>
            </Grid>
        </Grid>
    </Fieldset>
);

export default MaltTable;