import { Box, Button, FormControlLabel, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

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
    const [weightData, setWeightData] = useState<number[]>([])
    const [labels, setLabels] = useState<string[]>([])

    /* const handleValueChange = (event: any) => {

        setValue(event.target.value)
    } */




    const fetchWasteData = useCallback(
        async (wasteType?: string) => {
            const response = await fetch(`/api/weight/weight?wasteType=${wasteType || "4"}`,)
            const data = await response.json()

            const weightDataMap = data.map((d1: any) => d1.measurement)
            const labelsMap = data.map((d2: any) => d2.date)


            setWeightData(weightDataMap)
            setLabels(labelsMap)
        },
        [],
    )

    const handleValueChange = useCallback(
        async (event: any) => {
            const wasteType = event.target.value

            await fetchWasteData(wasteType)
            setValue(wasteType)
        },
        [fetchWasteData],
    )

    useEffect(() => {
        fetchWasteData()
            .catch(console.error)
    }, [fetchWasteData])


    const chartData = {
        labels,
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
            <Box textAlign='center' sx={{
                pt: "28px",
            }}>
                <Typography sx={{ fontSize: '24px', pb: '2px' }} variant='subtitle1'>Välj kategori</Typography>
                <StyledRadioGroup
                    aria-labelledby="alts"
                    name="quiz"
                    value={value}
                    row
                    onChange={handleValueChange}
                >
                    <FormControlLabel value="1" control={<Radio />} label="Alternativ-1" />
                    <FormControlLabel value="2" control={<Radio />} label="Alternativ-2" />
                    <FormControlLabel value="3" control={<Radio />} label="Alternativ-3." />
                    <FormControlLabel value="4" control={<Radio />} label="Alternativ-4." />
                </StyledRadioGroup>
            </Box>

            <Box textAlign='center' sx={{ paddingTop: "24px" }}>
                <LineChart
                    data={chartData}
                    title="Matsvinn över tid=!!"
                />
            </Box>
        </Container>
    );
};

export default Graph;
