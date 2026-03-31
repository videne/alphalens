import React from 'react';

const LoadingSkeleton = () => {
    return (
        <div className="loading-skeleton">
            {/* Customize the loading skeleton styles as per your needs */}
            <div className="skeleton-item" style={{ height: '20px', width: '100%', margin: '10px 0' }}></div>
            <div className="skeleton-item" style={{ height: '20px', width: '100%', margin: '10px 0' }}></div>
            <div className="skeleton-item" style={{ height: '20px', width: '50%', margin: '10px 0' }}></div>
            <div className="skeleton-item" style={{ height: '100px', width: '100%', margin: '10px 0' }}></div>
        </div>
    );
};

export default LoadingSkeleton;
