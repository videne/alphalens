// src/components/FinancialMetrics.jsx
import React from 'react';

const FinancialMetrics = () => {
    const metrics = [
        { name: 'Metric 1', value: '100' },
        { name: 'Metric 2', value: '200' },
        { name: 'Metric 3', value: '300' },
        { name: 'Metric 4', value: '400' },
    ];

    return (
        <div>
            <h2>Financial Metrics</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {metrics.map((metric, index) => (
                        <tr key={index}>
                            <td>{metric.name}</td>
                            <td>{metric.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FinancialMetrics;