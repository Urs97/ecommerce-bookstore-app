import React from 'react';
import { CarouselProvider, Slider, Slide, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.scss';
import SlideContent from './SlideContent/SlideContent';
import photo_1_sm from '../../assets/images/lib-photo-1-sm.jpg';
import photo_1_md from '../../assets/images/lib-photo-1-md.jpg';
import photo_1_lg from '../../assets/images/lib-photo-1-lg.jpg';
import photo_2_sm from '../../assets/images/lib-photo-2-sm.jpg';
import photo_2_md from '../../assets/images/lib-photo-2-md.jpg';
import photo_2_lg from '../../assets/images/lib-photo-2-lg.jpg';
import photo_3_sm from '../../assets/images/lib-photo-3-sm.jpg';
import photo_3_md from '../../assets/images/lib-photo-3-md.jpg';
import photo_3_lg from '../../assets/images/lib-photo-3-lg.jpg';
// import left_arrow from '../../assets/images/left-arrow-key.svg';
// import right_arrow from '../../assets/images/right-arrow-key.svg';

class Carousel extends React.Component {
    render() {
        return (
            <CarouselProvider
                className="carousel-provider"
                naturalSlideWidth={16}
                naturalSlideHeight={9}
                totalSlides={3}
                isPlaying={true}
                infinite={true}
                hasMasterSpinner={true}>
                <Slider className="slider">
                    <Slide index={0} className="slide">
                        <SlideContent />
                        <Image src={photo_1_sm}
                            srcSet={`${photo_1_sm} 640w,
                                    ${photo_1_md} 1024w,
                                    ${photo_1_lg} 2400w,`} 
                            alt="beautiful library interior"/>
                    </Slide>
                    <Slide index={1} className="slide">
                        <SlideContent />
                        <Image src={photo_2_sm}
                            srcSet={`${photo_2_sm} 640w,
                                    ${photo_2_md} 1024w,
                                    ${photo_2_lg} 2400w,`} 
                            alt="beautiful library interior"/>
                    </Slide>
                    <Slide index={2} className="slide">
                        <SlideContent />
                        <Image src={photo_3_sm}
                            srcSet={`${photo_3_sm} 640w,
                                    ${photo_3_md} 1024w,
                                    ${photo_3_lg} 2400w,`} 
                            alt="beautiful library interior"/>
                    </Slide>
                </Slider>
                <DotGroup className="dot-grp"/>
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