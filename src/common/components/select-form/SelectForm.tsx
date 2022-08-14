import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import SelectFormItem from '../../types/select-form/select-form-item';

import * as React from 'react';


type SelectFormProps = {
    label: string,
    items: SelectFormItem[]
};

const SelectForm: React.FC<SelectFormProps> = props => {
    return (
        <>
            <FormControl style={{ minWidth: 245 }} variant='filled' color='primary'>
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={''}
                    label="Age"
                    onChange={() => console.log('first')}
                >
                    {props.items.map((item) => <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>)}
                </Select>
            </FormControl>
        </>
    );
};

export default SelectForm;
