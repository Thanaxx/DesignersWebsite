import React from 'react';
import { Button } from '../Button/Button';
import {Cover, CoverImage, CoverWrapper, CoverTitle, CoverButton} from './CoverpageStyle';

function Coverpage() {
    return (
        <>
            <Cover>
                <CoverImage>
                    <CoverWrapper>
                        <CoverTitle>
                            <h1>WEB DESIGN & BRANDING</h1>
                            <p>Available for small businesses</p>
                        </CoverTitle>

                        <CoverButton>
                            <Button buttonStyle='btn--outline--normal' buttonSize='btn--large'>VIEW SERVICES</Button>
                            <Button buttonStyle='btn--primary' buttonSize='btn--large'>MESSAGE US</Button>
                        </CoverButton>
                    </CoverWrapper>
                </CoverImage>
            </Cover>
        </>
    )
}

export default Coverpage;
