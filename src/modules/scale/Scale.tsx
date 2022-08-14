import SelectForm from '@components/select-form/SelectForm';
import styled from '@emotion/styled';
import { BluetoothConnected, Send } from '@mui/icons-material';
import { Button, Divider, FormControl, Grid, Icon, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import SelectFormItem from '../../common/types/select-form/select-form-item';
import * as React from 'react';
import ScaleDevice from './scale-device/ScaleDevice';
import ScaleDisplay from './scale-display/ScaleDisplay';
import { ScaleFormSectionBox, ScaleFormTypography, ScaleHeaderBox } from './scale-styles';
import BoxButton from '@components/box-button/BoxButton';

type ScaleProps = {
    weight?: number,
};

const formOptions: SelectFormItem[] = [
    { text: 'Maten smakar dåligt', value: 1 },
    { text: 'Fluga i soppan', value: 2 },
    { text: 'Fanns ingen ketchup', value: 3 },
    { text: 'Vet ej', value: 4 }
]

const formTitle = "Välj orsak till matsvinnet"
const formLabel = "Välj orsak"
const buttonLabel = "registrera vikt"

const Scale: React.FC<ScaleProps> = props => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} direction="column" justifyContent='start' alignItems='center' container>
                    <ScaleHeaderBox>

                        <Container maxWidth={false}>
                            <ScaleDevice deviceName='ESP32' />
                            <ScaleDisplay weight={props.weight} />
                        </Container>
                    </ScaleHeaderBox>
                </Grid>
                <Grid item xs={12} direction="row" justifyContent='center' container>
                    <ScaleFormSectionBox>
                        <ScaleFormTypography variant='h5'>{formTitle}</ScaleFormTypography>
                        <SelectForm items={formOptions} label={formLabel} />
                        <BoxButton label={buttonLabel} />
                    </ScaleFormSectionBox>
                </Grid>
            </Grid>
        </>
    );
};

export default Scale;
