import React, { useState, useEffect } from 'react';

const SearchBar = ({ suggestions }) => {
    const [input, setInput] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    useEffect(() => {
        const result = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredSuggestions(result);
    }, [input, suggestions]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setInput(suggestion);
        setFilteredSuggestions([]);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Search..."
            />
            {filteredSuggestions.length > 0 && (
                <ul>
                    {filteredSuggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;