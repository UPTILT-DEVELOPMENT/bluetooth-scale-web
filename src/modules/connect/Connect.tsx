import BoxButton from '@components/box-button/BoxButton';
import Bluetooth from '@mui/icons-material/Bluetooth';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

type ConnectProps = {
    deviceName?: string,
    onConnectClick: () => Promise<void>
};

const pageTitle = "Waste Scale??"
const pageDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

const Connect: React.FC<ConnectProps> = props => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} direction="column" justifyContent='start' alignItems='center' container>
                    <Box sx={{
                        paddingTop: '24px',
                    }}>
                        <Typography variant='h4' align='center'>{pageTitle}</Typography>

                    </Box>
                    <Box sx={{
                        paddingTop: '24px',
                        width: 300
                    }}>
                        <Typography align='center' variant='body1'>{pageDescription}</Typography>
                    </Box>
                    <BoxButton
                        label='Connect to scale'
                        endIcon={<Bluetooth />}
                        paddingTop={10}
                        onClick={props.onConnectClick}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Connect;
