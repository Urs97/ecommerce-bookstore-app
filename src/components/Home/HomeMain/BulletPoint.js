import React from 'react';
import './BulletPoint.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BulletPoint(props) {
    return (
    <div className="bulletpoint">
        <FontAwesomeIcon icon={props.icon} />
        <p>{props.text}</p>
    </div>
    )
};

export default BulletPoint;