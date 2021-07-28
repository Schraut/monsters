import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, searchChange }) => (
    <input 
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={searchChange} // when a change happens, the handleChange is called

        // onChange={e => this.setState({ searchField: e.target.value })}
    />
);