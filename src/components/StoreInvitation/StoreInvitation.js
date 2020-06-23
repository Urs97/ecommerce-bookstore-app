import React from 'react';
import './StoreInvitation.scss';
import photo_sm from '../../assets/images/store-invitation-photo-sm.jpg';
import photo_md from '../../assets/images/store-invitation-photo-md.jpg';
import photo_lg from '../../assets/images/store-invitation-photo-lg.jpg';
import { Link } from 'react-router-dom';

const StoreInvitation = () => {
    return (
        <section className="store-invitation">
            <img src={photo_sm}
                srcSet={`${photo_sm} 640w,
                        ${photo_md} 1024w,
                        ${photo_lg} 2400w,`} 
                alt="Beautiful library interior by Benjamin Ashton on Unsplash"/>
            <h1 className="title">Browse Through Our Complete Library</h1>
            <Link to="/store" className="button">View More</Link>
        </section>
    )
};

export default StoreInvitation;
