import React, { useState } from 'react'
import './Slider.scss';
import SliderContent from './SliderContent/SliderContent';


function Slider() {
    const getWidth = () => window.innerWidth;
    const [translate, setTranslate] = useState(0);
    const [transition, setTransition] = useState(0.45);

    return (
        <section className="slider">
            <SliderContent  
                translate={translate}
                transition={transition}
                width={getWidth()}
            />
        </section>
    )
}

export default Slider;