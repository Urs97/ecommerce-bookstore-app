import React from 'react';
import './Home.scss';
import Carousel from '../Carousel/Carousel';
import BulletPointContainer from '../BulletPointContainer/BulletPointContainer';
import Testimonials from '../Testimonials/Testimonials';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreInvitation from '../StoreInvitation/StoreInvitation';
import { useHttp } from '../../hooks/useHttp';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const url = `http://openlibrary.org/subjects/fiction.json?limit=8&offset=4`;
    const [isLoading, data] = useHttp(url, 'homeApiData', []);

    const icon_1 = faAddressCard;
    const icon_2 = faAlignJustify;
    const icon_3 = faAmbulance;
    const icon_4 = faPencilAlt;
    const icon_5 = faBookmark;
    const icon_6 = faBookOpen;

    const text_1 = `We stock over 200 thousand books for immediate delivery`;
    const text_2 = `You get to choose from multiple book categories and genres`;
    const text_3 = `We will help you find the exact book that no other store has`;
    const text_4 = `Browse through hundreds of authors from our collection, ranging all the way from ancient Greece to this year's Bestsellers. Bookz truly has it all.`;
    const text_5 = `Our books aswell as all the resources we offer are easily bookmarkable. We take great pride in providing a service that's so crucial to book readers around the world.`;
    const text_6 = `We have one of the best and widest collections of books you can find today on the Internet. Over 100000 different books by over 80000 different authors.`;

    const title_1 = `Hundreds Of Authors`;
    const title_2 = `Tons Of Books`;
    const title_3 = `Easily Bookmarked`;

    const iconsRegular = [icon_1, icon_2, icon_3];
    const textsRegular = [text_1, text_2, text_3];

    const iconsExpanded = [icon_4, icon_5, icon_6];
    const titlesExpanded = [title_1, title_2, title_3];
    const textsExpanded = [text_4, text_5, text_6];

    return (   
        <main className="home-main">
            <Carousel />
            <BulletPointContainer mode={"regular"} icons={iconsRegular} texts={textsRegular} color={"blue"}/>
            {(!isLoading && data) ?
                <> 
                    <h1 className="title home-title">Bookz Bestsellers</h1>
                    <BooksContainer bookData={data.works}/>
                </> 
            : null}
            <StoreInvitation />
            <BulletPointContainer mode={"expanded"} icons={iconsExpanded} titles={titlesExpanded} 
                                texts={textsExpanded} color={"green"}/>
            <Testimonials />
        </main>
    )
};

export default Home;