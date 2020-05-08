import React from 'react';
import './BulletPoint.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BulletPoint(props) {
    return (
    <div className="bulletpoint">
        <span><FontAwesomeIcon icon={props.icon} /></span>
        <p>{props.text}</p>
    </div>
    )
};

export default BulletPoint;