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
            <section className="about-us-main">
                <h1 className="title">Our Mission</h1>
                <p>To provide the absolute best possible ecommerce bookstore experience.</p>
                <h2 className="title">About</h2>
                <p>Welcome to Bookz! We aim to offer our customers a variety of the digitally available books. We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support. We always keep an eye on the latest trends in ecommerce and put our customers’ wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the ecommerce industry. The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.</p>
                <h2 className="title">Leadership</h2>
                <section className="leadership">
                    <div>Co founder 1 template</div>
                    <div>Co founder 2 template</div>
                </section>
            </section>
            <BulletPointContainer mode={"expanded"} icons={icons} titles={titles} texts={texts} color={"yellow"}/>
        </main>
    )
};

export default AboutUs;
