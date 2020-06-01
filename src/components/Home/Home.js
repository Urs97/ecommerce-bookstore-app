import React, { useEffect } from 'react';
import './Home.scss';
import Carousel from '../Carousel/Carousel';
import BulletPointContainer from '../BulletPointContainer/BulletPointContainer';
import Testimonials from '../Testimonials/Testimonials';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreInvitation from '../StoreInvitation/StoreInvitation';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (   
        <main>
            <Carousel />
            <BulletPointContainer mode="regular"/>
            <h1 className="title home-title">Bookz Bestsellers</h1>
            <BooksContainer />
            <StoreInvitation />
            <BulletPointContainer mode="expanded"/>
            <Testimonials />
        </main>
    )
};

export default Home;