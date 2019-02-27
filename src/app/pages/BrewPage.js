import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';

import Paper from '../../components/Paper';
import {doUpdateBrew} from '../../actionCreators/brew';


const getFloat = (prevValue, value) => {
    const parsed = parseFloat(value);
    return isNaN(parsed)
        ? prevValue
        : value;
}

const handleChange = (id, onChange, type, prevValue) => e => {
    const value = type === 'number'
        ? getFloat(prevValue, e.target.value)
        : e.target.value;
    onChange(id, value);
};

const TextField2 = ({id, name, value, readOnly, onChange, type='text', adornment=null}) => (
    <TextField
        id={id}
        label={name}
        value={value}
        onChange={handleChange(id, onChange, type, value)}
        InputProps={{
            readOnly: readOnly,
            type: type,
            endAdornment: adornment ? <InputAdornment position="end">{adornment}</InputAdornment> : null
        }}
        margin="normal"/>
);


const OptionField = ({id, name, value, readOnly, onChange, options}) => (
    <TextField
        select
        id={id}
        label={name}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        SelectProps={{
            native: true,
        }}
        margin="normal">
        {options.map(option => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
    </TextField>
);


class BrewPage extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }
    
    _onChange(id, value) {
        console.log(id, value);
        this.props.updateBrew(this.props.brew.id, id, value);
    }

    render() {
        const {brew, isFetching} = this.props;

        if (!brew) {
            return null;
        }
        if (isFetching) {
            return (<p>Fetching</p>);
        }

        const readOnly = false;
        return (
            <Paper>
                <Typography variant="h5">{brew.name !== '' ? brew.name : 'Unnamed brew'}</Typography>
                <form  noValidate autoComplete="off">
                    <Grid container spacing={24}>
                        <Grid item sm={4} xs={12}>
                            <TextField2
                                id="name"
                                name="Beer Name"
                                value={brew.name}
                                readOnly={readOnly}
                                onChange={this._onChange}/>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <TextField2
                                id="brewer"
                                name="Brewer"
                                value={brew.brewer}
                                readOnly={true}/>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <OptionField
                                id="style"
                                name="Beer Style"
                                options={[{key: 'pils', value: 'Pilsner'}, {key: 'ipa', value: 'IPA'}]}
                                value={brew.style}
                                readOnly={readOnly}
                                onChange={this._onChange}/>
                        </Grid>
                        <Grid item sm={2} xs={6}>
                            <TextField2
                                id="batchSize"
                                name="Batch Size"
                                value={brew.batchSize}
                                readOnly={readOnly}
                                type='number'
                                adornment='L'
                                onChange={this._onChange}/>
                        </Grid>
                        <Grid item sm={2} xs={6}>
                            <TextField2
                                id="boilTime"
                                name="Boil Time"
                                value={brew.boilTime}
                                readOnly={readOnly}
                                type='number'
                                adornment='min'
                                onChange={this._onChange}/>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <TextField2
                                id="brewhouseEfficiency"
                                name="Brewhouse Efficiency"
                                value={brew.brewhouseEfficiency}
                                readOnly={readOnly}
                                type='number'
                                adornment='%'
                                onChange={this._onChange}/>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        );
    }
};

const actions = {
    updateBrew: doUpdateBrew,
};

const select = state => ({
    isFetching: state.brew.isFetching,
    isEditable: state.brew.isEditable,
    brew: state.brew.brew
});

export default connect(select, actions)(BrewPage);