import React from 'react';
import {FiSearch} from 'react-icons/fi';
import BrandingImages from './BrandingImages';
import {BrandingWrapper, BrandingSearch, SearchInput, BrandingList} from './BrandingStyle';

function Branding() {
    return (
        <>
            <BrandingWrapper>
            
                <BrandingSearch>
                    <SearchInput>
                        <FiSearch className='searchIcon'/>
                        <input type="search" name="search" placeholder="Search..." />
                    </SearchInput>

                    <h1>No matter what you’re envisioning or wanting to build, our product.</h1>

                </BrandingSearch>

                <BrandingList>
                    <BrandingImages 
                        img='pictures/BrandA.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <BrandingImages 
                        img='pictures/BrandB.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <BrandingImages 
                        img='pictures/BrandC.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <BrandingImages 
                        img='pictures/BrandD.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <BrandingImages 
                        img='pictures/BrandE.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <BrandingImages 
                        img='pictures/BrandF.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <BrandingImages 
                        img='pictures/BrandB.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />

                    <BrandingImages 
                        img='pictures/BrandC.jpg'
                        label="Clothes"
                        text="No matter what you’re envisioning or wanting to build, our product"
                    />
                    
                </BrandingList>

            </BrandingWrapper>
        </>
    )
}

export default Branding
