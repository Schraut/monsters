import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search'
        placeholder={placeholder}
<<<<<<< HEAD
        onChange={handleChange} // when a change happens, the handleChange is called
=======
        onChange={handleChange}
>>>>>>> 22c813d7930926309b1f2fab620527b5ce6bf773
        // onChange={e => this.setState({ searchField: e.target.value })}
    />
);