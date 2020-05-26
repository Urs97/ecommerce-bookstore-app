import React from 'react';
import './Home.scss';
import Carousel from '../Carousel/Carousel';
import BulletPointContainer from '../BulletPointContainer/BulletPointContainer';
import Testimonials from '../Testimonials/Testimonials';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreInvitation from '../StoreInvitation/StoreInvitation';

function Home() {
    return (
        <>
            <Carousel />
            <main>
                <BulletPointContainer mode="regular"/>
                <BooksContainer />
                <StoreInvitation />
                <BulletPointContainer mode="expanded"/>
                <Testimonials />
            </main>
        </>
    )
};

export default Home;