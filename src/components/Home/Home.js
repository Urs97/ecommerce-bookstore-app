import React from 'react';
import './Home.scss';
import Carousel from '../Carousel/Carousel';
import HomeMain from './HomeMain/HomeMain';
import Testimonials from '../Testimonials/Testimonials';

function Home() {
    return (
        <>
            <Carousel />
            <HomeMain />
            <Testimonials />
        </>
    )
};

export default Home;