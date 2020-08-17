import React from 'react';

import portrait_1_webp from '../../../assets/images/testimonial-portrait-1.webp';
import portrait_1_jpg from '../../../assets/images/testimonial-portrait-1.jpg';
import portrait_2_webp from '../../../assets/images/testimonial-portrait-3.webp';
import portrait_2_jpg from '../../../assets/images/testimonial-portrait-3.jpg';

export const AboutUsPhoto1 = () => {
    return (
        <picture>
            <source 
                type="image/webp" 
                srcSet={`${portrait_1_webp} 320w`}
            />
            <source 
                type="image/jpg" 
                srcSet={`${portrait_1_jpg} 320w`}
            />
            <img src={portrait_1_jpg} 
                alt="Facial portrait by Štefan Štefančík on Unsplash" />
        </picture>
    )
};

export const AboutUsPhoto2 = () => {
    return (
        <picture>
            <source 
                type="image/webp" 
                srcSet={`${portrait_2_webp} 320w`}
            />
            <source 
                type="image/jpg" 
                srcSet={`${portrait_2_jpg} 320w`}
            />
            <img src={portrait_2_jpg} 
                alt="Facial portrait by Mahesh Krishnamurthy on Unsplash" />
        </picture>
    )
};