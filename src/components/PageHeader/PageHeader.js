import React from 'react';
import './PageHeader.scss';

import { Element as ScrollElement } from 'react-scroll';

const PageHeader = ({ title, color }) => {
    return (
        <>
            <section className="page-header-nav-container" />
            <ScrollElement 
                name="page-header" 
                className={`page-header-category-title page-header-bg-${color}`}
                >
                <h1 className="title">{title}</h1>
            </ScrollElement>
        </>
    )
};

export default PageHeader;
