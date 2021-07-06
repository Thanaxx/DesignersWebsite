import React from 'react'
import ServicesOffered from './ServicesOffered';
import {Service, ServiceHeading, ServiceName} from './ServiceStyle';

function Services() {
    return (
        <>
            <Service>
                <ServiceHeading>
                    <h1>Let's Do This</h1>
                    <p>No matter what you’re envisioning or wanting to build, our product development team has the skill and expertise to bring it to life.</p>
                </ServiceHeading>

                <ServiceName>
                    <ServicesOffered 
                            img='pictures/branding.jpg'
                            text='Branding'
                            path='/branding'
                        />

                        <ServicesOffered 
                            img='pictures/webdesign.jpg'
                            text='Web Design'
                            path='/webdesign'
                        />
                    </ServiceName>
            </Service>
        </>
    )
}

export default Services;
