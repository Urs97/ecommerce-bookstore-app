import React from 'react';
import './HeaderContent.scss';
import { Link } from 'react-router-dom';

function HeaderContent() {
    return (
        <section className="header-content">
            <p>Reading provides you with wisdom</p>
            <h1 className="title">Keep Reading</h1>
            <Link to='/shop' className="link-button">See More</Link>
        </section>
    )
};

export default HeaderContent;