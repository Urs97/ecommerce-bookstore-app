import React from 'react';
import './HeaderCoverPhoto.scss';
import library_sm from '../../../../assets/images/header-library-sm.jpg';
import library_md from '../../../../assets/images/header-library-md.jpg';
import library_lg from '../../../../assets/images/header-library-lg.jpg';
import library_xl from '../../../../assets/images/header-library-xl.jpg';

function HeaderCoverPhoto() {
    return (
        <img src={library_sm}
                 srcSet={`${library_sm} 640w,
                          ${library_md} 1024w,
                          ${library_lg} 2400w,
                          ${library_xl} 3568w`} 
                 alt="beautiful library interior"/>
    )
};

export default HeaderCoverPhoto;