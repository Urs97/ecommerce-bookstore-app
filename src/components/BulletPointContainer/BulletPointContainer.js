import React from 'react';
import './BulletPointContainer.scss';
import BulletPoint from '../BulletPoint/BulletPoint';

const BulletPointContainer = ({ mode, icons, titles, texts, color }) => {

    if(mode === "regular") {
        return (
            <section className="bulletpoints">
                <BulletPoint mode ={mode} icon={icons[0]} text={texts[0]} color={color}/>
                <BulletPoint mode ={mode} icon={icons[1]} text={texts[1]} color={color}/>
                <BulletPoint mode ={mode} icon={icons[2]} text={texts[2]} color={color}/>
            </section>
        )
    } 
    
    else if (mode === "expanded") {
        return (
            <section className="bulletpoints">
                <BulletPoint mode={mode} icon={icons[0]} title={titles[0]} text={texts[0]} color={color}/>
                <BulletPoint mode={mode} icon={icons[1]} title={titles[1]} text={texts[1]} color={color}/>
                <BulletPoint mode={mode} icon={icons[2]} title={titles[2]} text={texts[2]} color={color}/>
            </section>
        )
    }
    
};

export default BulletPointContainer;