import React from 'react';
import './HomeHeader.scss';
import HeaderContent from './HomeHeaderContent/HeaderContent';
import HeaderCoverPhoto from './HomeHeaderCoverPhoto/HeaderCoverPhoto';

function Header() {
    return (
        <header className="home-header">
            <HeaderContent />
            <HeaderCoverPhoto />
        </header>                
    )
}

export default Header;