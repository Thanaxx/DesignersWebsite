import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {WebWrapper, WebSearch, WebInput, WebList} from './WebStyle';
import WebImages from './WebImages';

function Web() {
    return (
        <>
            <WebWrapper>
            
                <WebSearch>
                    <WebInput>
                        <FiSearch className='searchIcon'/>
                        <input type="search" name="search" placeholder="Search..." />
                    </WebInput>

                    <h1>No matter what you’re envisioning or wanting to build, our product.</h1>

                </WebSearch>

                <WebList>
                    <WebImages 
                        img='pictures/web1.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <WebImages 
                        img='pictures/web2.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <WebImages 
                        img='pictures/web_3.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <WebImages 
                        img='pictures/web4.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <WebImages 
                        img='pictures/web5.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <WebImages 
                        img='pictures/web6.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <WebImages 
                        img='pictures/web2.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <WebImages 
                        img='pictures/web_3.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                </WebList>

            </WebWrapper>
        </>
    )
}

export default Web;
