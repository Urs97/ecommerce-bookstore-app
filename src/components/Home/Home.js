import React from 'react';
import './Home.scss';
import Carousel from '../Carousel/Carousel';
import HomeMain from './HomeMain/HomeMain';

function Home() {
    return (
        <>
            <Carousel />
            <HomeMain />
        </>
    )
};

export default Home;