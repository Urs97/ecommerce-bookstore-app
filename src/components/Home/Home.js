import React, { useEffect, useState } from 'react';
import './Home.scss';
import Carousel from '../Carousel/Carousel';
import BulletPointContainer from '../BulletPointContainer/BulletPointContainer';
import Testimonials from '../Testimonials/Testimonials';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreInvitation from '../StoreInvitation/StoreInvitation';

function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [currentData, setCurrentData] = useState("No Data");

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBooksBySubject();
    }, [])

    const fetchBooksBySubject = async () => {
        const url = `http://openlibrary.org/subjects/fiction.json?limit=9&offset=4`;
        
        const data = await fetch(url)
                        .then(response => response.json());
        
        setIsLoading(false);
        setCurrentData(data.works);
        console.log(data.works)
    }

    return (   
        <main>
            <Carousel />
            <BulletPointContainer mode="regular"/>
            {(!isLoading && typeof currentData !== "string") ?
                <> 
                    <h1 className="title home-title">Bookz Bestsellers</h1>
                    <BooksContainer books={currentData}/>
                </> 
            : null}
            <StoreInvitation />
            <BulletPointContainer mode="expanded"/>
            <Testimonials />
        </main>
    )
};

export default Home;