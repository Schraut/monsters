import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange} // when a change happens, the handleChange is called
        // onChange={e => this.setState({ searchField: e.target.value })}
    />
);