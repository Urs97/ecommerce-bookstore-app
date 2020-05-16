import React from 'react';
import './Slide.scss';

function Slide({images, width}) {
    
    const slideStyle = {
        height: `100%`,
        width: `${width}px`
    };

    return (
            <img src={images[0]}
                 srcSet={`${images[0]} 640w,
                          ${images[1]} 1024w,
                          ${images[2]} 2400w,`} 
                 alt="beautiful library interior"
                 style={slideStyle}/>
    )
};

export default Slide;