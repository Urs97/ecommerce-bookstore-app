import React from 'react';
import { CarouselProvider, Slider, Slide, Image, DotGroup, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
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

class Carousel extends React.Component {
    render() {
        const text_1 = "Reading provides you with wisdom";
        const text_2 = "Learn from the experience of others";
        const text_3 = "Read and relax after a long day";
        const title_1 = "Keep Reading";
        const title_2 = "Knowledge Is Power";
        const title_3 = "Reading Is Fun";

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
                        <SlideContent 
                            text={text_1}
                            title={title_1}
                        />
                        <Image src={photo_1_sm}
                            srcSet={`${photo_1_sm} 640w,
                                    ${photo_1_md} 1024w,
                                    ${photo_1_lg} 2400w,`} 
                            alt="beautiful library interior"/>
                    </Slide>
                    <Slide index={1} className="slide">
                        <SlideContent 
                            text={text_2}
                            title={title_2}
                        />
                        <Image src={photo_2_sm}
                            srcSet={`${photo_2_sm} 640w,
                                    ${photo_2_md} 1024w,
                                    ${photo_2_lg} 2400w,`} 
                            alt="beautiful library interior"/>
                    </Slide>
                    <Slide index={2} className="slide">
                        <SlideContent 
                            text={text_3}
                            title={title_3}
                        />
                        <Image src={photo_3_sm}
                            srcSet={`${photo_3_sm} 640w,
                                    ${photo_3_md} 1024w,
                                    ${photo_3_lg} 2400w,`} 
                            alt="beautiful library interior"/>
                    </Slide>
                </Slider>
                <ButtonBack className="carousel-btn">
                    <span role="img" aria-label="left arrow icon">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                </ButtonBack>
                <ButtonNext className="carousel-btn crs-btn-next">
                    <span role="img" aria-label="right arrow icon">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </ButtonNext>
                <DotGroup className="dot-grp"/>
            </CarouselProvider>
        )
    };
};

export default Carousel;