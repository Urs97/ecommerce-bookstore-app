import React from 'react';
import './HeaderCoverPhoto.scss';
import library_sm from '../../../../assets/images/lib-photo-1-sm.jpg';
import library_md from '../../../../assets/images/lib-photo-1-md.jpg';
import library_lg from '../../../../assets/images/lib-photo-1-lg.jpg';

function HeaderCoverPhoto() {
    return (
        <img src={library_sm}
                 srcSet={`${library_sm} 640w,
                          ${library_md} 1024w,
                          ${library_lg} 2400w,`} 
                 alt="beautiful library interior"/>
    )
};

export default HeaderCoverPhoto;