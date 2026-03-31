import React from 'react';

const RiskIndicators = () => {
    // Example risk metrics data
    const riskMetrics = {
        volatility: '12.5%',
        valueAtRisk: '$500,000',
        maxDrawdown: '8%',
        beta: '1.2',
        sharpeRatio: '1.5'
    };

    return (
        <div>
            <h1>Risk Indicators</h1>
            <ul>
                <li><strong>Volatility:</strong> {riskMetrics.volatility}</li>
                <li><strong>Value at Risk:</strong> {riskMetrics.valueAtRisk}</li>
                <li><strong>Max Drawdown:</strong> {riskMetrics.maxDrawdown}</li>
                <li><strong>Beta:</strong> {riskMetrics.beta}</li>
                <li><strong>Sharpe Ratio:</strong> {riskMetrics.sharpeRatio}</li>
            </ul>
        </div>
    );
};

export default RiskIndicators;
