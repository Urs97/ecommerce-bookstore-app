import React from 'react';
import './HomeMain.scss';
import BulletPoints from './BulletPoints/BulletPoints';

function HomeMain() {
    return (
        <main>
            <section className="bulletpoints">
                <BulletPoints />
            </section>
        </main>
    )
};

export default HomeMain;