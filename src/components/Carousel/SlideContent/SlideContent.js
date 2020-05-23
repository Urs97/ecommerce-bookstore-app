import React from 'react';
import './SlideContent.scss';
import { Link } from 'react-router-dom';

function SlideContent({text, title}) {
    return (
        <section className="slide-content">
            <p>{text}</p>
    <h1 className="title">{title}</h1>
            <Link to='/shop' className="link-button">See More</Link>
        </section>
    )
};

export default SlideContent;
