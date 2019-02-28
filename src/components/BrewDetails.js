import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import OptionField from './OptionField';
import TextField from './TextField';
import Fieldset from './Fieldset'

const styles = {
};

const BrewDetails = ({brew, onChange, readOnly}) => (
    <Fieldset>
        <Grid container spacing={24}>
            <Grid item sm={3} xs={6}>
                <TextField
                    id="name"
                    name="Beer Name"
                    value={brew.name}
                    readOnly={readOnly}
                    onChange={onChange}/>
            </Grid>
            <Grid item sm={3} xs={6}>
                <TextField
                    id="brewer"
                    name="Brewer"
                    value={brew.brewer}
                    readOnly={true}/>
            </Grid>
            <Grid item sm={3} xs={6}>
                <OptionField
                    id="style"
                    name="Beer Style"
                    options={[{key: 'pils', value: 'Pilsner'}, {key: 'ipa', value: 'India Pale Ale'}]}
                    value={brew.style}
                    readOnly={readOnly}
                    onChange={onChange}/>
            </Grid>
            <Grid item sm={3} xs={6}>
                <TextField
                    id="brewhouseEfficiency"
                    name="Brewhouse Efficiency"
                    value={brew.brewhouseEfficiency}
                    readOnly={readOnly}
                    type='number'
                    adornment='%'
                    onChange={onChange}/>
            </Grid>
            <Grid item sm={3} xs={6}>
                <TextField
                    id="batchSize"
                    name="Batch Size"
                    value={brew.batchSize}
                    readOnly={readOnly}
                    type='number'
                    adornment='L'
                    onChange={onChange}/>
            </Grid>
            <Grid item sm={3} xs={6}>
                <TextField
                    id="boilTime"
                    name="Boil Time"
                    value={brew.boilTime}
                    readOnly={readOnly}
                    type='number'
                    adornment='min'
                    onChange={onChange}/>
            </Grid>
        </Grid>
    </Fieldset>
);


export default withStyles(styles)(BrewDetails);