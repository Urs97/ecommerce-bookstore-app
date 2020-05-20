import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import photo_1_sm from '../../assets/images/lib-photo-1-sm.jpg';
import photo_1_md from '../../assets/images/lib-photo-1-md.jpg';
import photo_1_lg from '../../assets/images/lib-photo-1-lg.jpg';

class Carousel extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}>
                <Slider>
                    <Slide index={0}>I am the first Slide.
                        <Image src={photo_1_sm}
                               srcSet={`${photo_1_sm} 640w,
                                        ${photo_1_md} 1024w,
                                        ${photo_1_lg} 2400w,`} 
                            alt="beautiful library interior"/>
                    </Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        )
    };
};

export default Carousel;

// <img src={library_sm}
// srcSet={`${library_sm} 640w,
//          ${library_md} 1024w,
//          ${library_lg} 2400w,`} 
// alt="beautiful library interior"/>