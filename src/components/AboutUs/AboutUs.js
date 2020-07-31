import React from 'react';
import './AboutUs.scss';
import PageHeader from '../PageHeader/PageHeader';
import BulletPointContainer from '../BulletPointContainer/BulletPointContainer';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PersonalProfile from './PersonalProfile/PersonalProfile';
import portrait_1 from '../../assets/images/testimonial-portrait-1.webp';
import portrait_2 from '../../assets/images/testimonial-portrait-3.webp';

const AboutUs = () => {

    const icon_1 = faMailBulk;
    const icon_2 = faPhone; 
    const icon_3 = faMapMarkerAlt;

    const title_1 = `Email & Website`;
    const title_2 = `Phone Numbers`;
    const title_3 = `Location & Adress`;

    const text_1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    const text_2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    const text_3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    const dummyLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `;

    const icons = [icon_1, icon_2, icon_3];
    const titles = [title_1, title_2, title_3];
    const texts = [text_1, text_2, text_3];

    return (
        <main>
            <PageHeader title="About Us" color="yellow"/>
            <section className="about-us-main">
                <h1 className="title">Our Mission</h1>
                <p><strong>To provide the absolute best possible ecommerce bookstore experience.</strong></p>
                <h2 className="title">About</h2>
                <p>Welcome to Bookz! <strong>We aim to offer our customers a variety of the digitally available books.</strong> We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support. We always keep an eye on the latest trends in ecommerce and put our customers’ wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the ecommerce industry. The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </section>
            <section className="about-us-leadership">
                <h2 className="title leadership-title">Leadership</h2>
                <section className="leadership-main">
                    <PersonalProfile 
                        imgSrc={portrait_1} 
                        name={"Richard Jones"} 
                        title={"CEO & Co Founder"} 
                        text={dummyLorem} />
                    <PersonalProfile 
                        imgSrc={portrait_2} 
                        name={"Steve Mason"} 
                        title={"CTO & Co Founder"} 
                        text={dummyLorem} />
                </section>
            </section>
            <BulletPointContainer 
                mode={"expanded"} 
                icons={icons} 
                titles={titles} 
                texts={texts} 
                color={"yellow"} />
        </main>
    )
};

export default AboutUs;
