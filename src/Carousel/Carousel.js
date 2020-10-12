import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "./banner-01.png";
import slide2 from "./banner-02.png";
import slide3 from "./banner-03.png";
import slide4 from "./begai-logo.jpg";
import slide5 from "./betrai-logo.jpg";
import slide6 from "./sale.jpg";

function MyCarousel() {
  return (
    <Carousel className="container" indicators={false} id="banner">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="banner website"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="banner website"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="banner website"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="banner website"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide5}
          alt="banner website"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide6}
          alt="banner website"
        />
      </Carousel.Item>

    </Carousel>
  );
}
export default MyCarousel;
