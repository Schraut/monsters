import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img 
            alt="monster" 
            //Don't forget to use the backtick instead of single or double quotation marks!!
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} 
        />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
);