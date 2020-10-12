import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Carousel.css";
import freeShip from "../Items/free-ship.svg";

export default function ResponsiveBoy() {
  const [carousels, setCarousel] = useState([]);
  useEffect(() => {
    async function getBoyCarousel() {
      const response = await fetch("https://data-shopmebin.herokuapp.com/boys");
      const carousels = await response.json();
      setCarousel(carousels);
    }
    getBoyCarousel();
  }, []);

  let settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <Slider {...settings}>
        {carousels.map((itemCarousel) => (
          <div className="carousel-style" key={itemCarousel.id}>
            <div className="item-box">
              <Link to={"/boys/" + itemCarousel.slug}>
                <img
                  src={itemCarousel.image}
                  style={{ width: "100%" }}
                  alt={"ảnh " + itemCarousel.name}
                />
              </Link>
              <div id="item-mask" />
              <Link to={"/boys/" + itemCarousel.slug}>
                <div id="item-view">Chi tiết</div>
              </Link>
            </div>
            <div className="item-info">
              <div className="item-info1">
                <div className="item-name">
                  <Link to={"/boys/" + itemCarousel.slug}>
                    <span>{itemCarousel.name}</span>
                  </Link>
                </div>
                <div className="item-price">
                  <span>{itemCarousel.priceNew} VNĐ</span>{" "}
                  <span className="span-off">| - {itemCarousel.percent}</span>
                </div>
              </div>
              <div className="item-info2">
                <div className="item-sell">
                  <img src={freeShip} alt="Miễn phí vận chuyển" />
                </div>
              </div>
              <div className="item-addCart">
                <button className="addCart">
                  {" "}
                  <Link to="/cart">Mua ngay</Link>
                </button>
                <button className="addCart-icon">
                  <svg
                    className="bi bi-cart2"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
