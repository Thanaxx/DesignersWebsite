import React from 'react';
import { Button } from '../../components/Button/Button';
import {Contacts, ContactBg, ContactCards, ContactType} from './ContactStyle';

function Contact() {
    return (
        <>
            <Contacts>
                <ContactBg>
                    <h1>Get in touch</h1>
                    <p>No matter what you’re envisioning or wanting to build, our product </p>
                </ContactBg>

                <ContactCards>
                    <ContactType>
                        <img src="pictures/message.svg" alt="mesage" />
                        <p>Talk to Sales</p>
                        <p>No matter what you’re envisioning or wanting to build, our product </p>
                        <p>+6393 0300 9243</p>
                    </ContactType>

                    <ContactType>
                        <img src="pictures/call.svg" alt="call" />
                        <p>Contact Customer Support</p>
                        <p>No matter what you’re envisioning or wanting to build, our product </p>
                        <Button buttonStyle='btn--outline' buttonSize='btn--medium'>wbld_il@gmail.com</Button>
                    </ContactType>
                </ContactCards>
            </Contacts>
        </>
    )
}

export default Contact;
