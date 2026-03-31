import React from 'react';
import SearchBar from './SearchBar';
import PriceChart from './PriceChart';
import FinancialMetrics from './FinancialMetrics';
import CashFlowAnalysis from './CashFlowAnalysis';
import AnalystRatings from './AnalystRatings';
import AIThesis from './AIThesis';
import Comparables from './Comparables';
import RiskIndicators from './RiskIndicators';

const MainContent = () => {
    return (
        <div>
            <SearchBar />
            <PriceChart />
            <FinancialMetrics />
            <CashFlowAnalysis />
            <AnalystRatings />
            <AIThesis />
            <Comparables />
            <RiskIndicators />
        </div>
    );
};

export default MainContent;