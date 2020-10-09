import React from 'react';
import './BulletPoint.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BulletPoint = ({mode, icon, title, text, color}) => {
    if(mode === "default") {
        return (
            <div className="bulletpoint">
                <span className={color}>
                    <FontAwesomeIcon icon={icon} />
                </span>
                <p>{text}</p>
            </div>
        )
    }

    if(mode === "expanded") {
        return (
            <div className="bulletpoint bulletpoint-expanded">
                <span className={color}>
                    <FontAwesomeIcon icon={icon} />
                </span>
                <h4 className="title">{title}</h4>
                <p>{text}</p>
            </div>
        )
    }

    return <div>Bulletpoint error - invalid mode prop</div>;
};

export default BulletPoint;