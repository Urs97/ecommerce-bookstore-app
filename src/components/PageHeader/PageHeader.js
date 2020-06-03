import React from 'react';
import './PageHeader.scss';

function PageHeader({ title, color }) {
    return (
        <>
            <section className="page-header-nav-container"></section>
            <section className={`page-header-category-title page-header-bg-${color}`}>
                <h1 className="title">{title}</h1>
            </section>
        </>
    )
};

export default PageHeader;
