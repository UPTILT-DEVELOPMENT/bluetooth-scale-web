import { Box, Button } from '@mui/material';
import { ChartData, LineControllerChartOptions } from 'chart.js';

import * as React from 'react';
import { Line } from 'react-chartjs-2';


type LineChartProps = {
    title?: string,
    data: any,
};

const LineChart: React.FC<LineChartProps> = props => {
    console.log('Render LineChart')

    const options = {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: true
                }
            }
        },
        elements: {
            line: {
                tension: 0
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                display: false
            },
            title: {
                display: true,
                text: props.title || "Chart Title",
                font: {
                    size: 22
                },
                padding: {
                    bottom: 28
                }
            },
        },
    };
    return (
        <>
            <Line options={options} data={props.data} />
        </>
    );
};

export default React.memo(LineChart);
