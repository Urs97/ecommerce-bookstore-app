import React from 'react';
import './HomeMain.scss';
import BulletPoint from './BulletPoint';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';

function HomeMain() {
    const icon_1 = faAddressCard;
    const icon_2 = faAlignJustify;
    const icon_3 = faAmbulance;

    const text_1 = `We stock over 200 thousand books for immediate delivery`;
    const text_2 = `You get to choose from multiple book categories and genres`;
    const text_3 = `We will help you find the exact book that no other store has`;

    return (
        <main>
            <section className="bulletpoints">
                <BulletPoint text={text_1} icon={icon_1}/>
                <BulletPoint text={text_2} icon={icon_2}/>
                <BulletPoint text={text_3} icon={icon_3}/>
            </section>
        </main>
    )
};

export default HomeMain;