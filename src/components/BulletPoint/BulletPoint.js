import React from 'react';
import './BulletPoint.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BulletPoint(props) {
    
    if(props.mode === "expanded") {
        return (
            <div className="bulletpoint bulletpoint-expanded">
                <span><FontAwesomeIcon icon={props.icon} /></span>
                <h4 className="title">{props.title}</h4>
                <p>{props.text}</p>
            </div>
            )
    }

    else {
        return (
            <div className="bulletpoint">
                <span><FontAwesomeIcon icon={props.icon} /></span>
                <p>{props.text}</p>
            </div>
            )
    }
};

export default BulletPoint;