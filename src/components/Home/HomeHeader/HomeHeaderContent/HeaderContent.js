import React from 'react';
import './HeaderContent.scss';
import { Link } from 'react-router-dom';

function HeaderContent() {
    return (
        <section className="header-content">
            <p>Reading provides you with wisdom</p>
            <h1>Keep Reading</h1>
            <Link to='/shop' className="link">See More</Link>
        </section>
    )
};

export default HeaderContent;