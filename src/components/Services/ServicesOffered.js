import React from 'react';
import {ServiceImageLink} from './ServiceStyle';

function ServicesOffered(props) {
    return (
        <>
            <ServiceImageLink to={props.path}>
                <img 
                    src={props.img} 
                    alt="Services"
                />

                <p>{props.text}</p>
            </ServiceImageLink>
        </>
    )
}

export default ServicesOffered;
