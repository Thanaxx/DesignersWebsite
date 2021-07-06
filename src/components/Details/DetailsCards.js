import React from 'react';
import { Cards } from './DetailsStyle';

function DetailsCards(props) {
    return (
        <Cards to={props.path}>
            <img 
                src={props.img}
                alt="icon"
            />

            <p>{props.text}</p>
            <h2>{props.label}</h2>
        </Cards>
    )
}

export default DetailsCards
