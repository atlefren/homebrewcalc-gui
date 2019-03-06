import React from 'react';
import Grid from '@material-ui/core/Grid';

import Fieldset from './Fieldset';
import EditableTable from './EditableTable';

const IngredientList = ({title, columns, ingredient, brew, children}) => (
    <Fieldset title={title}>
        <Grid container spacing={24}>
            <Grid item sm={8} xs={8}>
                <EditableTable 
                data={brew[ingredient]}
                columns={columns}/>
            </Grid>
            <Grid item sm={4} xs={4}>
                {children}
            </Grid>
        </Grid>
    </Fieldset>
);

export default IngredientList;