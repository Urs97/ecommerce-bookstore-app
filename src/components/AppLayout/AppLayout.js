import React from 'react';
import './AppLayout.scss';
import Navigation from '../Navigation/Navigation';

function AppLayout(props) {
    return (
        <React.Fragment>
            <Navigation />
            {props.children}
        </React.Fragment>
    )
};

export default AppLayout;