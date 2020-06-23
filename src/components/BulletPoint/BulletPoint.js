import React from 'react';
import './BulletPoint.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BulletPoint = ({mode, icon, title, text, color}) => {
    
    if(mode === "expanded") {
        return (
            <div className="bulletpoint bulletpoint-expanded">
                <span className={color}><FontAwesomeIcon icon={icon} /></span>
                <h4 className="title">{title}</h4>
                <p>{text}</p>
            </div>
            )
    }
    
    else if(mode === "regular") {
        return (
            <div className="bulletpoint">
                <span className={color}><FontAwesomeIcon icon={icon} /></span>
                <p>{text}</p>
            </div>
            )
    }
};

export default BulletPoint;