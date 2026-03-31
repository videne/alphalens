import React from 'react';
import { Line } from 'react-chartjs-2';

const CashFlowAnalysis = () => {
    // Dummy data for illustration
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Cash Inflow',
                data: [3000, 2000, 1000, 4000, 5000],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
            {
                label: 'Cash Outflow',
                data: [2000, 3000, 1500, 3000, 3500],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div>
            <h2>Cash Flow Analysis</h2>
            <Line data={data} />
        </div>
    );
};

export default CashFlowAnalysis;
