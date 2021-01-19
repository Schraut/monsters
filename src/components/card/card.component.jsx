import React from 'react';

import './card.styles.css';

<<<<<<< HEAD
// The card displays the image, name, and email. 
// The img tag uses the robohash api to get the random photos
=======
>>>>>>> 22c813d7930926309b1f2fab620527b5ce6bf773
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
<<<<<<< HEAD
);
=======
);
>>>>>>> 22c813d7930926309b1f2fab620527b5ce6bf773
