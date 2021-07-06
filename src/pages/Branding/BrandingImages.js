import React from 'react';
import {Brands} from './BrandingStyle';

function BrandingImages(props) {
    return (
        <>
            <Brands>
                <img 
                    src={props.img} 
                    alt="branding"
                />
                <p>{props.label}</p>
                <h3>{props.text}</h3>
            </Brands>
        </>
    )
}

export default BrandingImages
