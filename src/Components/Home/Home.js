import React from 'react';
import Adventure from '../AdventurePart/Adventure';
import Banner from '../Banner/Banner';
import CustomerSupport from '../CustomerSupport/CustomerSupport';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <CustomerSupport></CustomerSupport>
            <Adventure></Adventure>
        </div>
    );
};

export default Home;