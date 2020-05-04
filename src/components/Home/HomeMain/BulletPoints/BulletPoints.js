import React from 'react'
import './BulletPoints.scss';
import BulletPoint from './BulletPoint/BulletPoint';

function BulletPoints() {
    return (
        <section className="bulletpoints">
            <BulletPoint />
            <BulletPoint />
            <BulletPoint />
        </section>
    )
}

export default BulletPoints;