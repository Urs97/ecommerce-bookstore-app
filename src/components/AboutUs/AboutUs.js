import React, { useEffect } from 'react';
import './AboutUs.scss';
import PageHeader from '../PageHeader/PageHeader';
import BulletPointContainer from '../BulletPointContainer/BulletPointContainer';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    const icon_1 = faMailBulk;
    const icon_2 = faPhone; 
    const icon_3 = faMapMarkerAlt;

    const title_1 = `Email & Website`;
    const title_2 = `Phone Numbers`;
    const title_3 = `Location & Adress`;

    const text_1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    const text_2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    const text_3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

    const icons = [icon_1, icon_2, icon_3];
    const titles = [title_1, title_2, title_3];
    const texts = [text_1, text_2, text_3];

    return (
        <main>
            <PageHeader title="About Us" color="yellow"/>
            <BulletPointContainer mode={"expanded"} icons={icons} titles={titles} texts={texts} color={"yellow"}/>
        </main>
    )
};

export default AboutUs;
