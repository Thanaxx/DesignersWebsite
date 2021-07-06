import React from 'react';
import {Designs} from './WebStyle';

function WebImages(props) {
    return (
        <>
        <Designs>
            <img 
                src={props.img} 
                alt="branding"
            />
            <p>{props.label}</p>
            <h3>{props.text}</h3>
        </Designs>
    </>
    )
}

export default WebImages
