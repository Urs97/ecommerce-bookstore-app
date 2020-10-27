import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import {
  CarouselPhoto1,
  CarouselPhoto2,
  CarouselPhoto3,
} from "./CarouselPhotos/CarouselPhotos";
import SlideContent from "./SlideContent/SlideContent";

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
        lockOnWindowScroll={true}
      >
        <Slider className="slider">
          <Slide index={0} className="slide">
            <SlideContent text={text_1} title={title_1} />
            <CarouselPhoto1 />
          </Slide>
          <Slide index={1} className="slide">
            <SlideContent text={text_2} title={title_2} />
            <CarouselPhoto2 />
          </Slide>
          <Slide index={2} className="slide">
            <SlideContent text={text_3} title={title_3} />
            <CarouselPhoto3 />
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
        <DotGroup className="dot-grp" tabIndex="-1" disableActiveDots={false} />
      </CarouselProvider>
    );
  }
}

export default Carousel;
