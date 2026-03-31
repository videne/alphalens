import React from 'react';

const AnalystRatings = ({ ratings }) => {
    return (
        <div>
            <h2>Analyst Ratings</h2>
            <table>
                <thead>
                    <tr>
                        <th>Analyst</th>
                        <th>Rating</th>
                        <th>Price Target</th>
                    </tr>
                </thead>
                <tbody>
                    {ratings.map((rating, index) => (
                        <tr key={index}>
                            <td>{rating.analyst}</td>
                            <td>{rating.rating}</td>
                            <td>{rating.priceTarget}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnalystRatings;