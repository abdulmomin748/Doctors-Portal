import React from 'react';
import Banner from '../Banner/Banner';  
import ContactUs from '../ContactUs/ContactUs';
import Exceptional from '../Exceptional/Exceptional';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services />
            <Exceptional />
            <MakeAppoinment />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;