import React from 'react';
import styled from 'styled-components';

const StyledSlide = styled.img`
    height: 100%;
    width: ${width => width}px;
`

function Slide({images, width}) {
    
    return (
        <StyledSlide src={images[0]}
            srcSet={`${images[0]} 640w,
                     ${images[1]} 1024w,
                     ${images[2]} 2400w,`} 
            alt="beautiful library interior"/>
    )
};

export default Slide;