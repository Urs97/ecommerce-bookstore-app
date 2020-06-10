import React, { useEffect } from 'react';
import './Home.scss';
import Carousel from '../Carousel/Carousel';
import BulletPointContainer from '../BulletPointContainer/BulletPointContainer';
import Testimonials from '../Testimonials/Testimonials';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreInvitation from '../StoreInvitation/StoreInvitation';
import { useHttp } from '../../hooks/useHttp';

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const url = `http://openlibrary.org/subjects/fiction.json?limit=8&offset=4`;
    const [isLoading, data] = useHttp(url, 'homeApiData', []);

    return (   
        <main>
            <Carousel />
            <BulletPointContainer mode="regular"/>
            {(!isLoading && data) ?
                <> 
                    <h1 className="title home-title">Bookz Bestsellers</h1>
                    <BooksContainer bookData={data.works}/>
                </> 
            : null}
            <StoreInvitation />
            <BulletPointContainer mode="expanded"/>
            <Testimonials />
        </main>
    )
};

export default Home;