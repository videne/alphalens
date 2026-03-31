import React from 'react';
import { Line } from 'react-chartjs-2';

const PriceChart = ({ data }) => {
    const chartData = {
        labels: data.map(d => d.date),
        datasets: [
            {
                label: 'Price',
                data: data.map(d => d.price),
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1
            }
        ]
    };

    return <Line data={chartData} />;
};

export default PriceChart;