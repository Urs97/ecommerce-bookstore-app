import React from 'react';
import '../CarouselPhotos/CarouselPhotos.scss';

import photo_1_1920_jpg from '../../../assets/images/lib-photo-1-1920.jpg';
import photo_1_1600_jpg from '../../../assets/images/lib-photo-1-1600.jpg';
import photo_1_1366_jpg from '../../../assets/images/lib-photo-1-1366.jpg';
import photo_1_1024_jpg from '../../../assets/images/lib-photo-1-1024.jpg';
import photo_1_768_jpg from '../../../assets/images/lib-photo-1-768.jpg';
import photo_1_1920_webp from '../../../assets/images/lib-photo-1-1920.webp';
import photo_1_1600_webp from '../../../assets/images/lib-photo-1-1600.webp';
import photo_1_1366_webp from '../../../assets/images/lib-photo-1-1366.webp';
import photo_1_1024_webp from '../../../assets/images/lib-photo-1-1024.webp';
import photo_1_768_webp from '../../../assets/images/lib-photo-1-768.webp';

import photo_2_1920_jpg from '../../../assets/images/lib-photo-2-1920.jpg';
import photo_2_1600_jpg from '../../../assets/images/lib-photo-2-1600.jpg';
import photo_2_1366_jpg from '../../../assets/images/lib-photo-2-1366.jpg';
import photo_2_1024_jpg from '../../../assets/images/lib-photo-2-1024.jpg';
import photo_2_768_jpg from '../../../assets/images/lib-photo-2-768.jpg';
import photo_2_1920_webp from '../../../assets/images/lib-photo-2-1920.webp';
import photo_2_1600_webp from '../../../assets/images/lib-photo-2-1600.webp';
import photo_2_1366_webp from '../../../assets/images/lib-photo-2-1366.webp';
import photo_2_1024_webp from '../../../assets/images/lib-photo-2-1024.webp';
import photo_2_768_webp from '../../../assets/images/lib-photo-2-768.webp';

import photo_3_1920_jpg from '../../../assets/images/lib-photo-3-1920.jpg';
import photo_3_1600_jpg from '../../../assets/images/lib-photo-3-1600.jpg';
import photo_3_1366_jpg from '../../../assets/images/lib-photo-3-1366.jpg';
import photo_3_1024_jpg from '../../../assets/images/lib-photo-3-1024.jpg';
import photo_3_768_jpg from '../../../assets/images/lib-photo-3-768.jpg';
import photo_3_1920_webp from '../../../assets/images/lib-photo-3-1920.webp';
import photo_3_1600_webp from '../../../assets/images/lib-photo-3-1600.webp';
import photo_3_1366_webp from '../../../assets/images/lib-photo-3-1366.webp';
import photo_3_1024_webp from '../../../assets/images/lib-photo-3-1024.webp';
import photo_3_768_webp from '../../../assets/images/lib-photo-3-768.webp';

import photo_1_768_portrait_webp from '../../../assets/images/lib-photo-1-768-portrait.webp';
import photo_2_768_portrait_webp from '../../../assets/images/lib-photo-2-768-portrait.webp';
import photo_3_768_portrait_webp from '../../../assets/images/lib-photo-3-768-portrait.webp';
import photo_1_768_portrait_jpg from '../../../assets/images/lib-photo-1-768-portrait.jpg';
import photo_2_768_portrait_jpg from '../../../assets/images/lib-photo-2-768-portrait.jpg';
import photo_3_768_portrait_jpg from '../../../assets/images/lib-photo-3-768-portrait.jpg';

export const CarouselPhoto1 = () => {
    return (
        <picture className="carousel-photo">
            <source 
                media="(orientation: portrait)"
                type="image/webp"
                srcSet={`${photo_1_768_portrait_webp} 320w`}
            />
            <source 
                media="(orientation: portrait)"
                type="image/jpg"
                srcSet={`${photo_1_768_portrait_jpg} 320w`}
            />
            <source 
                type="image/webp" 
                srcSet={`${photo_1_768_webp} 768w,
                        ${photo_1_1024_webp} 1024w,
                        ${photo_1_1366_webp} 1366w,
                        ${photo_1_1600_webp} 1600w,
                        ${photo_1_1920_webp} 1920w`}
            />
            <source 
                type="image/jpg" 
                srcSet={`${photo_1_768_jpg} 768w,
                        ${photo_1_1024_jpg} 1024w,
                        ${photo_1_1366_jpg} 1366w,
                        ${photo_1_1600_jpg} 1600w,
                        ${photo_1_1920_jpg} 1920w`}
            />
            <img src={photo_1_1920_jpg} 
                alt="Wooden and cozy library interior by Anna Hunko/Emil Widlund on Unsplash" />
        </picture>
    )
};

export const CarouselPhoto2 = () => {
    return (
        <picture className="carousel-photo">
            <source 
                media="(orientation: portrait)"
                type="image/webp"
                srcSet={`${photo_2_768_portrait_webp} 320w`}
            />
            <source 
                media="(orientation: portrait)"
                type="image/jpg"
                srcSet={`${photo_2_768_portrait_jpg} 320w`}
            />
            <source 
                type="image/webp" 
                srcSet={`${photo_2_768_webp} 768w,
                        ${photo_2_1024_webp} 1024w,
                        ${photo_2_1366_webp} 1366w,
                        ${photo_2_1600_webp} 1600w,
                        ${photo_2_1920_webp} 1920w`}
            />
            <source 
                type="image/jpg" 
                srcSet={`${photo_2_768_jpg} 768w,
                        ${photo_2_1024_jpg} 1024w,
                        ${photo_2_1366_jpg} 1366w,
                        ${photo_2_1600_jpg} 1600w,
                        ${photo_2_1920_jpg} 1920w`}
            />
            <img src={photo_2_1920_jpg} 
                alt="Beautiful bookshelf by Nick Fewings/Fahrul Azmi on Unsplash" />
        </picture>
    )
};

export const CarouselPhoto3 = () => {
    return (
        <picture className="carousel-photo">
            <source 
                media="(orientation: portrait)"
                type="image/webp"
                srcSet={`${photo_3_768_portrait_webp} 320w`}
            />
            <source 
                media="(orientation: portrait)"
                type="image/jpg"
                srcSet={`${photo_3_768_portrait_jpg} 320w`}
            />
            <source 
                type="image/webp" 
                srcSet={`${photo_3_768_webp} 768w,
                        ${photo_3_1024_webp} 1024w,
                        ${photo_3_1366_webp} 1366w,
                        ${photo_3_1600_webp} 1600w,
                        ${photo_3_1920_webp} 1920w`}
            />
            <source 
                type="image/jpg" 
                srcSet={`${photo_3_768_jpg} 768w,
                        ${photo_3_1024_jpg} 1024w,
                        ${photo_3_1366_jpg} 1366w,
                        ${photo_3_1600_jpg} 1600w,
                        ${photo_3_1920_jpg} 1920w`}
            />
            <img src={photo_3_1920_jpg} 
                alt="Modern library interior by Amelie and Niklas Ohlrogge/Mariia Zakatiura on Unsplash" />
        </picture>
    )
};


