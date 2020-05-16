import React from 'react'
import img_sm_1 from '../../../assets/images/lib-photo-1-sm.jpg';
import img_md_1 from '../../../assets/images/lib-photo-1-md.jpg';
import img_lg_1 from '../../../assets/images/lib-photo-1-lg.jpg';
import img_sm_2 from '../../../assets/images/lib-photo-2-sm.jpg';
import img_md_2 from '../../../assets/images/lib-photo-2-md.jpg';
import img_lg_2 from '../../../assets/images/lib-photo-2-lg.jpg';
import img_sm_3 from '../../../assets/images/lib-photo-3-sm.jpg';
import img_md_3 from '../../../assets/images/lib-photo-3-md.jpg';
import img_lg_3 from '../../../assets/images/lib-photo-3-lg.jpg';
import Slide from '../Slide/Slide';

function SliderContent(props) {

    const style = {
        transform: `translateX(-${props => props.translate}px)`,
        transition: `transform ease-out ${props => props.transition}s`,
        height: `100%`,
        width: `${props => props.width}px`,
        display: `flex`
    };
    
    const images = [[img_sm_1, img_md_1, img_lg_1], 
                    [img_sm_2, img_md_2, img_lg_2], 
                    [img_sm_3, img_md_3, img_lg_3]];

    return (
        <section style={style}>
            {images.map((slide, i) => (
                <Slide key={i} images={slide} width={props.width}/>
            ))}
        </section>
    )
};

export default SliderContent;

