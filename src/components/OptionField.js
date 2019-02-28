import React from 'react';
import TextField from '@material-ui/core/TextField';


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

export default OptionField;
