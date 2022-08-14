import { BluetoothConnected, Send } from '@mui/icons-material';
import { Button, Divider, FormControl, Grid, Icon, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import * as React from 'react';

type ScaleProps = {
    weight?: number,
};

const Scale: React.FC<ScaleProps> = props => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} direction="column" justifyContent='start' alignItems='center' container>
                    <Box
                        sx={{
                            display: 'flex',
                            /* flexWrap: 'wrap', */
                            /*  margin: 'auto', */
                            width: '100%',
                            alignItems: 'center',
                            '& > :not(style)': {

                                height: 280,
                                backgroundColor: '#3A3940',
                                color: '#11151C',
                                display: 'flex',
                                flexDirection: 'column',
                                /* alignItems: 'center', */
                                justifyContent: 'center'
                            },
                        }}>
                        {/* <Paper elevation={1}>
                            <Typography variant='body1' align='center'>Weight</Typography>
                            <Divider variant="middle" style={{ width: '80%' }} />
                            <Typography variant='h4' align='center'>45 Kg</Typography>
                        </Paper> */}

                        <Container>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                '& > :not(style)': {
                                    /* m: 1, */
                                    color: '#FFFFFF'
                                },
                            }}>
                                <BluetoothConnected fontSize="small" style={{ fontSize: "14px" }} /><span style={{ fontSize: "14px", paddingLeft: "4px" }}>Device ESP32</span>
                                {/* <p>Device ESP32</p> */}
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignSelf: 'center',
                                    '& > :not(style)': {
                                        m: 1,
                                        paddingBottom: 6,
                                        paddingTop: 6,
                                        width: 216,
                                        height: 216,
                                        background: "linear-gradient(0deg, rgba(208, 188, 255, 0.08), rgba(208, 188, 255, 0.08)), #1C1B1F",
                                        color: '#FFFFFF',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    },
                                }}
                            >

                                <Paper elevation={0}>
                                    <Typography variant='h6' align='center'>WEIGHT</Typography>
                                    <Typography variant='h3' align='center'>10 kg</Typography>
                                </Paper>
                            </Box>
                        </Container>
                    </Box>
                </Grid>
                <Grid item xs={12} direction="row" justifyContent='center' container>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignSelf: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '& > :not(style)': {
                                /* m: 6, */
                                /*  display: 'flex',
                                 alignItems: 'center', */
                                marginTop: 6,
                                /* marginBottom:  */
                            },
                        }}
                    >
                        <Typography variant='h5' style={{ color: '#3A3940' }}>Välj orsak till matsvinnet</Typography>
                        <FormControl style={{ minWidth: 245 }} variant='filled' color='primary'>
                            <InputLabel id="demo-simple-select-label">Välj orsak</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={''}
                                label="Age"
                                onChange={() => console.log('first')}
                            >
                                <MenuItem value={10}>Maten smakar dåligt</MenuItem>
                                <MenuItem value={20}>Fluga i soppan</MenuItem>
                                <MenuItem value={30}>Fanns ingen ketchup</MenuItem>
                                <MenuItem value={30}>Vet ej</MenuItem>
                            </Select>
                        </FormControl>
                        <Box textAlign='center' sx={{
                            p: 4
                        }}>
                            <Button /* style={{ maxWidth: 142, }} */ variant="contained" endIcon={<Send />}>
                                Registrera Vikt
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Scale;
