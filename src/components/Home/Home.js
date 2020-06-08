import React, { useEffect } from 'react';
import './Home.scss';
import Carousel from '../Carousel/Carousel';
import BulletPointContainer from '../BulletPointContainer/BulletPointContainer';
import Testimonials from '../Testimonials/Testimonials';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreInvitation from '../StoreInvitation/StoreInvitation';
import { useHttp } from '../hooks/http';

function Home() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const url = `http://openlibrary.org/subjects/fiction.json?limit=8&offset=4`;

    const [isLoading, fetchedData] = useHttp(url, []);
    
    if(fetchedData) {
        // Custom random price generator
        fetchedData.works.forEach(book => {
            let randomTwoDigitNum = [];
            randomTwoDigitNum.push(Math.floor(Math.random() * 90 + 10));
            randomTwoDigitNum.push(Math.floor(Math.random() * 90 + 10));
            book["price"] = randomTwoDigitNum;
        });
    };

    return (   
        <main>
            <Carousel />
            <BulletPointContainer mode="regular"/>
            {(!isLoading && fetchedData) ?
                <> 
                    <h1 className="title home-title">Bookz Bestsellers</h1>
                    <BooksContainer bookData={fetchedData.works}/>
                </> 
            : null}
            <StoreInvitation />
            <BulletPointContainer mode="expanded"/>
            <Testimonials />
        </main>
    )
};

export default Home;