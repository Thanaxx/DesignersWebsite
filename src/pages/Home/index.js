import React from 'react';
import Coverpage from '../../components/Coverpage';
import Services from '../../components/Services';
import Works from '../../components/Works';
import Details from '../../components/Details';

function Home() {
    return (
        <>
            <Coverpage />
            <Services />
            <Works />
            <Details />

        </>
    )
}

export default Home;
