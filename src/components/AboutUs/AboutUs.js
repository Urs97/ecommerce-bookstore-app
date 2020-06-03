import React, { useEffect } from 'react';
import './AboutUs.scss';
import PageHeader from '../PageHeader/PageHeader';

function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <main>
            <PageHeader title="About Us" color="yellow"/>
        </main>
    )
};

export default AboutUs;
