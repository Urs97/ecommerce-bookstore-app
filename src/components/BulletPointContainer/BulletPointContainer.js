import React from 'react';
import './BulletPointContainer.scss';
import BulletPoint from '../BulletPoint/BulletPoint';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

function BulletPointContainer({ mode }) {
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

    if(mode === "regular") {
        return (
            <section className="bulletpoints">
                <BulletPoint text={text_1} icon={icon_1}/>
                <BulletPoint text={text_2} icon={icon_2}/>
                <BulletPoint text={text_3} icon={icon_3}/>
            </section>
        )
    } 
    
    else if (mode === "expanded") {
        return (
            <section className="bulletpoints">
                <BulletPoint text={text_4} icon={icon_4} title={title_1} mode={mode}/>
                <BulletPoint text={text_5} icon={icon_5} title={title_2} mode={mode}/>
                <BulletPoint text={text_6} icon={icon_6} title={title_3} mode={mode}/>
            </section>
        )
    }
    
};

export default BulletPointContainer;