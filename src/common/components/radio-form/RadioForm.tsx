import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import SelectFormItem from '../../types/select-form/select-form-item';

import React, { useState } from 'react';
import { Send } from '@mui/icons-material';


type RadioFormProps = {
    onSubmit?: (event: any) => void,
    onRadioValueChanged?: (event: any) => void,
    currentValue: string
};

const RadioForm: React.FC<RadioFormProps> = props => {
    return (
        <Box textAlign='center' sx={{
            paddingTop: 2
        }}>
            <form onSubmit={props.onSubmit}>
                <FormControl sx={{ m: 3 }} variant="standard">
                    <FormLabel sx={{ fontSize: '20px' }} id="alts">Välj orsak till matsvinnet</FormLabel>
                    <RadioGroup
                        aria-labelledby="alts"
                        name="quiz"
                        value={props.currentValue}
                        onChange={props.onRadioValueChanged}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="Alternativ-1" />
                        <FormControlLabel value="2" control={<Radio />} label="Alternativ-2" />
                        <FormControlLabel value="3" control={<Radio />} label="Alternativ-3." />
                        <FormControlLabel value="4" control={<Radio />} label="Alternativ-4." />
                    </RadioGroup>
                    {/* <FormHelperText>{helperText}</FormHelperText> */}
                    <Button sx={{ mt: 5, mr: 1 }} type="submit" variant="outlined" disabled={props.currentValue === ""}>
                        registrera vikt
                    </Button>
                </FormControl>
            </form>
        </Box>
    );
};

export default React.memo(RadioForm);
