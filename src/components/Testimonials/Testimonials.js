import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Testimonials.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import portrait_1_webp from "../../assets/images/testimonial-portrait-1.webp";
import portrait_2_webp from "../../assets/images/testimonial-portrait-2.webp";
import portrait_3_webp from "../../assets/images/testimonial-portrait-3.webp";
import portrait_1_jpg from "../../assets/images/testimonial-portrait-1.jpg";
import portrait_2_jpg from "../../assets/images/testimonial-portrait-2.jpg";
import portrait_3_jpg from "../../assets/images/testimonial-portrait-3.jpg";

class Testimonials extends React.Component {
  render() {
    const text_1 =
      "I like Bookz more and more each day because it makes my life a lot easier. I'd really be lost without Bookz.";
    const text_2 =
      "I found what I needed and books arrived in a timely manner. The prices are super low, keep up the good work!";
    const text_3 =
      "It really saves me time and effort. Accesible book reading is exactly what I feel has been lacking so far and I have nothing but praise for the way Bookz goes about it!";
    const name_1 = "Daniel Smith";
    const name_2 = "Holly Dangerfield";
    const name_3 = "Steve Abrams";

    return (
      <CarouselProvider
        className="testimonial-provider"
        naturalSlideWidth={16}
        naturalSlideHeight={9}
        totalSlides={3}
        isPlaying={true}
        infinite={true}
      >
        <Slider className="testimonial">
          <Slide className="testimonial-slide">
            <div className="wrapper">
              <picture>
                <source type="image/webp" srcSet={`${portrait_1_webp} 768w`} />
                <source type="image/jpg" srcSet={`${portrait_1_jpg} 768w`} />
                <img
                  src={portrait_1_jpg}
                  alt="Facial portrait by Štefan Štefančík on Unsplash"
                />
              </picture>
              <p>{text_1}</p>
              <span>{name_1}</span>
            </div>
          </Slide>
          <Slide className="testimonial-slide">
            <div className="wrapper">
              <picture>
                <source type="image/webp" srcSet={`${portrait_2_webp} 768w`} />
                <source type="image/jpg" srcSet={`${portrait_2_jpg} 768w`} />
                <img
                  src={portrait_2_jpg}
                  alt="Facial portrait by Robert Godwin on Unsplash"
                />
              </picture>
              <p>{text_2}</p>
              <span>{name_2}</span>
            </div>
          </Slide>
          <Slide className="testimonial-slide">
            <div className="wrapper">
              <picture>
                <source type="image/webp" srcSet={`${portrait_3_webp} 768w`} />
                <source type="image/jpg" srcSet={`${portrait_3_jpg} 768w`} />
                <img
                  src={portrait_3_jpg}
                  alt="Facial portrait by Mahesh Krishnamurthy on Unsplash"
                />
              </picture>
              <p>{text_3}</p>
              <span>{name_3}</span>
            </div>
          </Slide>
        </Slider>
        <ButtonBack className="testimonials-btn">
          <span role="img" aria-label="left arrow icon">
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
        </ButtonBack>
        <ButtonNext className="testimonials-btn tstm-btn-next">
          <span role="img" aria-label="right arrow icon">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </ButtonNext>
      </CarouselProvider>
    );
  }
}

export default Testimonials;
