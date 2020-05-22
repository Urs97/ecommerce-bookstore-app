import React from 'react';
import './SlideContent.scss';
import { Link } from 'react-router-dom';

function SlideContent() {
    return (
        <section className="slide-content">
            <p>Reading provides you with wisdom</p>
            <h1 className="title">Keep Reading</h1>
            <Link to='/shop' className="link-button">See More</Link>
        </section>
    )
};

export default SlideContent;
