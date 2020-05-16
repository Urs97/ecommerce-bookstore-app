import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Arrow() {
    const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />
    const rightArrow = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <div>
            {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
        </div>
    )
};

export default Arrow;