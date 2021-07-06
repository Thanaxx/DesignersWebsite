import React from 'react';
import DetailsCards from './DetailsCards';
import { DetailsWrapper, DetailsName } from './DetailsStyle';

function Details() {
    return (
        <>
            <DetailsWrapper>
                <DetailsName>
                    <DetailsCards
                        img='pictures/icon1.svg'
                        text='No matter what you’re envisioning or wanting to build, our product development.'
                        label='WBLD'
                        path='/contact'
                    />

                    <DetailsCards
                        img='pictures/icon2.svg'
                        text='No matter what you’re envisioning or wanting to build, our product development.'
                        label='WBLD'
                        path='/contact'
                    />

                    <DetailsCards
                        img='pictures/icon3.svg'
                        text='No matter what you’re envisioning or wanting to build, our product development.'
                        label='WBLD'
                        path='/contact'
                    />

                    <DetailsCards
                        img='pictures/icon4.svg'
                        text='No matter what you’re envisioning or wanting to build, our product development.'
                        label='WBLD'
                        path='/contact'
                    />

                </DetailsName>
            </DetailsWrapper>  
        </>
    )
}

export default Details;
