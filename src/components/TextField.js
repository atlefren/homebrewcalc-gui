import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


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

export default TextField2;