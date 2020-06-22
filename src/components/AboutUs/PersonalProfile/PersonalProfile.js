import React from 'react';
import './PersonalProfile.scss';

const PersonalProfile = ({ imgSrc, name, title, text }) => {
    return (
        <section className="personal-profile">
            <img src={imgSrc} alt="portrait"/>
            <h3 className="title">{name}</h3>
            <h4 className="title">{title}</h4>
            <p>{text}</p>
        </section>
    );
};

export default PersonalProfile;