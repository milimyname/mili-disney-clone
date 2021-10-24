import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="assets/images/slider-badging.jpg" alt="Slider 1" />
      </Wrap>
      <Wrap>
        <img src="assets/images/slider-badag.jpg" alt="Slider 2" />
      </Wrap>
      <Wrap>
        <img src="assets/images/slider-scale.jpg" alt="Slider 3" />
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  button {
    z-index: 1;
  }

  .slick-list {
    overflow: visible;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    transition-duration: 0.3s;
  }

  img:hover {
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
`;
