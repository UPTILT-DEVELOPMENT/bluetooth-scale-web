import styled from '@emotion/styled';
import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { ScaleDisplayBox } from './scale-display-styles';

type ScaleDisplayProps = {
    weight?: number,
};

const ScaleDisplay: React.FC<ScaleDisplayProps> = props => {

    console.log('ScaleDisplay render')
    return (
        <>
            <ScaleDisplayBox>
                <Paper elevation={3}>
                    <Typography variant='h6' align='center'>WEIGHT</Typography>
                    <Typography variant='h3' align='center'>{(props.weight!.toFixed(2))} kg</Typography>
                </Paper>
            </ScaleDisplayBox>
        </>
    );
};

export default ScaleDisplay;
