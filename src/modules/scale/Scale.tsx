import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Container } from '@mui/system';
import React, { useCallback, useState } from 'react';
import ScaleDevice from './scale-device/ScaleDevice';
import ScaleDisplay from './scale-display/ScaleDisplay';
import { ScaleFormSectionBox, ScaleHeaderBox } from './scale-styles';
import BoxButton from '@components/box-button/BoxButton';
import BluetoothScale from '@components/bluetooth/BluetoothScale';
import RadioForm from '@components/radio-form/RadioForm';

type ScaleProps = {
    btDevice: BluetoothDevice
};

const Scale: React.FC<ScaleProps> = props => {
    const [weight, setWeight] = useState(0)
    const [reason, setReason] = useState<number | undefined>(undefined)
    const [radioValue, setRadioValue] = useState("")

    const handleRadioValueChanged = useCallback(
        (event: any) => {
            setRadioValue(event.target.value)
        },
        [],
    )


    const onWeightRegisterSubmit = useCallback(
        async (event: any) => {
            event.preventDefault();
            const response = await fetch("api/weight/weight", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: weight, type: radioValue })
            })

            console.log(response)
        },
        [radioValue, reason],
    )


    const test = useCallback(
        (e: any) => {
            const { value: dataView } = e.target
            const measuredWeight = dataView.getFloat32(0, true)
            console.log(`Measured Weight: ${measuredWeight}`)
            setWeight(measuredWeight)
        },
        [],
    )

    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} direction="column" justifyContent='start' alignItems='center' container>
                    <ScaleHeaderBox>
                        <BluetoothScale device={props.btDevice} handleWeightChange={test} />
                        <Container maxWidth={false}>
                            <ScaleDevice deviceName={props.btDevice.name ?? "No Device Name"} />
                            <ScaleDisplay weight={weight || 0} />
                        </Container>
                    </ScaleHeaderBox>
                </Grid>
                <Grid item xs={12} direction="row" justifyContent='center' container>
                    {/* <ScaleFormSectionBox>
                        <RadioForm onSubmit={onWeightRegisterSubmit} onRadioValueChanged={handleRadioValueChanged} currentValue={radioValue} />
                    </ScaleFormSectionBox> */}

                    <RadioForm onSubmit={onWeightRegisterSubmit} onRadioValueChanged={handleRadioValueChanged} currentValue={radioValue} />
                </Grid>

                {/* <Grid item xs={12} direction="row" justifyContent='center' container>
                    <ToggleButtonGroup
                        color="primary"
                        value={1}
                        exclusive
                        onChange={() => console.log('hej')}
                        aria-label="Platform"
                    >
                        <Grid container spacing={2} xs={12} sx={{ flexGrow: 1 }}>
                            <Grid item xs={6}>
                                <ToggleButton fullWidth={true} value="scale">Scale</ToggleButton>
                            </Grid>
                            <Grid item xs={6}>
                                <ToggleButton fullWidth={true} value="data">Data</ToggleButton>
                            </Grid>
                            <Grid item xs={6}>
                                <ToggleButton fullWidth={true} value="data">Shit</ToggleButton>
                            </Grid>
                            <Grid item xs={6}>
                                <ToggleButton fullWidth={true} value="data">Stuff</ToggleButton>
                            </Grid>
                        </Grid>
                    </ToggleButtonGroup>
                </Grid> */}
            </Grid>
        </>
    );
};

export default Scale;
