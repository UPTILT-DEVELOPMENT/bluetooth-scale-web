import { Box, Button, FormControlLabel, Grid, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import React, { useCallback, useEffect, useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Container } from '@mui/system';
import LineChart from '@components/charts/line-chart/LineChart';
import { StyledRadioGroup } from './graph-styles';

type GraphProps = {
    label?: string,
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


/* const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; */


const Graph: React.FC<GraphProps> = props => {
    const [value, setValue] = useState("1")
    const [weightData, setWeightData] = useState<any[]>([])
    const [labels, setLabels] = useState<string[]>([])
    const [radioValue, setRadioValue] = useState("kok")




    const fetchWasteData = useCallback(
        async (wasteType?: string) => {
            console.log("do the fetch fetch")
            const response = await fetch(`/api/weight/weight?wasteType=${wasteType || "4"}`,)
            const data = await response.json()

            /* const weightDataMap = data.map((d1: any) => d1.weight)
            const labelsMap = data.map((d2: any) => d2.date)
            
 */
            const weightDataArr = data.map((d: any) => ({ x: d.date, y: d.weight }))

            setWeightData(weightDataArr)
            /* setLabels(labelsMap) */
        },
        [],
    )

    const handleRadioValueChanged = useCallback(
        async (event: any) => {
            const wasteType = event.target.value

            await fetchWasteData(wasteType)
            setRadioValue(wasteType)
        },
        [fetchWasteData],
    )

    useEffect(() => {
        fetchWasteData("kok")
            .catch(console.error)
    }, [fetchWasteData])


    const chartData = {
        datasets: [
            {
                label: 'Weight',
                data: weightData,
                borderColor: '#bdbbc4',
                backgroundColor: '#bdbbc4',
                lineTension: 0.4
            },
        ],
    };



    return (
        <Container>
            <Box textAlign='center' sx={{ paddingTop: "24px" }}>
                {/* <Typography sx={{ fontSize: '24px', pb: '2px' }} variant='subtitle1'>Välj kategori</Typography> */}
                <LineChart
                    data={chartData}
                    title="Matsvinn över tid=!!"
                />
            </Box>
            <Box textAlign='center' sx={{
                pt: "28px",
            }}>
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
                            value={radioValue}
                            exclusive
                            onChange={handleRadioValueChanged}
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

                </Grid>
            </Box>


        </Container>
    );
};

export default Graph;
