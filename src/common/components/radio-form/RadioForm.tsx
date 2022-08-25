import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
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
        <Grid item xs={12} direction="row" justifyContent='center' container>
            <Grid item xs={12} direction="row" justifyContent='center' container>
                <ToggleButtonGroup
                    sx={{
                        pt: '14px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2,1fr)',
                        gap: '0.8em',
                    }}
                    color="primary"
                    value={props.currentValue}
                    exclusive
                    onChange={props.onRadioValueChanged}
                    aria-label="Platform"
                >
                    <ToggleButton sx={{
                        "&.MuiToggleButtonGroup-grouped": {
                            borderRadius: "4px !important",
                            border: "1px solid lightgrey !important"
                        }
                    }} fullWidth={true} value="kok">Kök</ToggleButton>
                    <ToggleButton sx={{
                        "&.MuiToggleButtonGroup-grouped": {
                            borderRadius: "4px !important",
                            border: "1px solid lightgrey !important"
                        }
                    }} fullWidth={true} value="servering">Servering</ToggleButton>
                    <ToggleButton sx={{
                        "&.MuiToggleButtonGroup-grouped": {
                            borderRadius: "4px !important",
                            border: "1px solid lightgrey !important"
                        }
                    }} fullWidth={true} value="tallrik">Tallrik</ToggleButton>
                    <ToggleButton sx={{
                        "&.MuiToggleButtonGroup-grouped": {
                            borderRadius: "4px !important",
                            border: "1px solid lightgrey !important"
                        }
                    }} fullWidth={true} value="beredning">Beredning</ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12} direction="row" justifyContent='center' container>
                <Button sx={{ mt: 5, mr: 1 }} onClick={props.onSubmit} variant="outlined" disabled={props.currentValue === ""}>
                    registrera vikt
                </Button>
            </Grid>

        </Grid>
    );
};
/* const RadioForm: React.FC<RadioFormProps> = props => {
    return (
        <Box textAlign='center' sx={{
            paddingTop: 2,
        }}>
            <form onSubmit={props.onSubmit}>
                <FormControl sx={{ m: 3 }} variant="standard">
                    <FormLabel sx={{ fontSize: '20px' }} id="alts">Välj orsak till matsvinnet</FormLabel>
                    <RadioGroup
                        aria-labelledby="alts"
                        name="quiz"
                        value={props.currentValue}
                        onChange={props.onRadioValueChanged}
                        sx={{
                            pt: '6  px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="Alternativ-1" />
                        <FormControlLabel value="2" control={<Radio />} label="Alternativ-2" />
                        <FormControlLabel value="3" control={<Radio />} label="Alternativ-3." />
                        <FormControlLabel value="4" control={<Radio />} label="Alternativ-4." />
                    </RadioGroup>
                    <Button sx={{ mt: 5, mr: 1 }} type="submit" variant="outlined" disabled={props.currentValue === ""}>
                        registrera vikt
                    </Button>
                </FormControl>
            </form>
        </Box>
    );
}; */

export default React.memo(RadioForm);
