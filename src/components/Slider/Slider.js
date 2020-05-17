import React, { useState } from 'react'
import styled from 'styled-components';
import SliderContent from './SliderContent/SliderContent';
import Arrow from './Arrow/Arrow';

const StyledSlider = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

function Slider() {
    const numOfSlides = 3;
    const getWidth = () => window.innerWidth;
    const [translate, setTranslate] = useState(0);
    const [transition, setTransition] = useState(0.45);
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        if (activeSlide === numOfSlides - 1) {
            setActiveSlide(0);
            setTranslate(0);
        }

        setActiveSlide(activeSlide + 1);
        setTranslate((activeSlide + 1) * getWidth());
    };

    const prevSlide = () => {
        if (activeSlide === 0) {
            setTranslate((numOfSlides -1) * getWidth());
            setActiveSlide(numOfSlides - 1);
        }

        setActiveSlide(activeSlide -1);
        setTranslate((activeSlide - 1) * getWidth());
    }

    return (
        <StyledSlider>
            <SliderContent  
                translate={translate}
                transition={transition}
                width={getWidth() * numOfSlides}
            />
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
        </StyledSlider>
    )
}

export default Slider;