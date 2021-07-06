import React from 'react';
import { Button } from '../Button/Button';
import {Work, WorkWrapper, WorkImage, WorkDescription} from './WorkStyle';

function Works() {
    return (
        <>
            <Work>
                <WorkWrapper>
                    <WorkImage>
                        <img src="pictures/works.jpg" alt="workImg" />
                    </WorkImage>

                    <WorkDescription>
                        <h1>No matter what you’re envisioning</h1>
                        <p>No matter what you’re envisioning or wanting to build, our product development team has the skill and expertise to bring it to life No matter what you’re envisioning or wanting to build, our product development team has the skill and expertise to bring it to life.</p>
                        <Button buttonStyle='btn--secondary' buttonSize='btn--medium'>SEE WORKS</Button>
                    </WorkDescription>
                </WorkWrapper>
            </Work>
        </>
    )
}

export default Works;
