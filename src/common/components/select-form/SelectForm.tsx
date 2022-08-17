import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import SelectFormItem from '../../types/select-form/select-form-item';

import * as React from 'react';


type SelectFormProps = {
    label: string,
    onSelectChange: (e: any) => void,
    val: number | undefined
};

const formOptions: SelectFormItem[] = [
    { text: 'Alternativ 1', value: 1 },
    { text: 'Alternativ 2', value: 2 },
    { text: 'Alternativ 3', value: 3 },
    { text: 'Alternativ 4', value: 4 }
]

const SelectForm: React.FC<SelectFormProps> = props => {
    console.log('SelectForm')
    return (
        <>
            <FormControl style={{ minWidth: 245 }} variant='filled' color='primary'>
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.val ?? ""}
                    label="Age"
                    onChange={(e: any) => props.onSelectChange(e)}
                >
                    {formOptions.map((item) => <MenuItem key={item.value} defaultValue="" value={item.value}>{item.text}</MenuItem>)}
                </Select>
            </FormControl>
        </>
    );
};

export default React.memo(SelectForm);
