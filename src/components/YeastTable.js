import React from 'react';
import Grid from '@material-ui/core/Grid';

import Fieldset from './Fieldset';
import EditableTable from './EditableTable';

const yeastColumns = [
    {id: 'name', name: 'Yeast name', align:'left'},
    {id: 'attenuation', name: 'Attenuation', align:'right'},
    {id: 'type', name: 'Form', align:'left'}
];

const YeastTable = ({brew}) => (
    <Fieldset title={'Yeast'}>
        <Grid container spacing={0}>
            <Grid item sm={8} xs={8}>
                <EditableTable 
                data={brew.yeasts}
                columns={yeastColumns}/>
            </Grid>
        </Grid>
    </Fieldset>
);

export default YeastTable;