import React from "react";
import Slider from "react-slick";
import { Container } from "./SliderImage.styles";

// Images
import GirlEarringIn from "../../images/DeepDream/GirlEarringInput.jpg";
import GirlEarringOu from "../../images/DeepDream/GirlEarringOutput.jpg";
import MountainIn from "../../images/DeepDream/MountainInput.jpg";
import MountainOu from "../../images/DeepDream/MountainOutput.jpg";
import SpaceXIn from "../../images/DeepDream/SpaceXInput.jpg";
import SpaceXOu from "../../images/DeepDream/SpaceXOutput.jpg";
import EagleIn from "../../images/DeepDream/EagleInput.jpg";
import EagleOu from "../../images/DeepDream/EagleOutput.jpg";
import NinjaIn from "../../images/DeepDream/NinjaInput.jpg";
import NinjaOu from "../../images/DeepDream/NinjaOutput.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <circle cx="31" cy="31" r="31" stroke="#FFF"></circle>
          <path
            fill="#F7F7F7"
            d="M29.78 35.53a.749.749 0 01-1.133-.976l.073-.084L32.189 31l-3.47-3.47a.75.75 0 01-.072-.976l.073-.084a.75.75 0 01.976-.073l.084.073 4 4a.75.75 0 01.073.976l-.073.084-4 4z"
          ></path>
        </g>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <g fill="none" fillRule="evenodd" transform="matrix(-1 0 0 1 63 1)">
          <circle cx="31" cy="31" r="31" stroke="#FFF"></circle>
          <path
            fill="#F7F7F7"
            d="M29.78 35.53a.749.749 0 01-1.133-.976l.073-.084L32.189 31l-3.47-3.47a.75.75 0 01-.072-.976l.073-.084a.75.75 0 01.976-.073l.084.073 4 4a.75.75 0 01.073.976l-.073.084-4 4z"
          ></path>
        </g>
      </svg>
    </div>
  );
}

function SliderImage({title})
{
  const settings = {
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "500px",
    slidesToShow: 1,
    // easing: "ease-in-out",
    adaptiveHeight: true,
    initialSlide: 0,
    touchMove: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 1000,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: "200px",
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "150px",
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerMode: true,
          centerPadding: "100px",
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: "50px",
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          dots: true,
          infinite: true,
          slidesToShow: 1,
          adaptiveHeight: true,
          speed: 1000,
          autoplaySpeed: 800,
        },
      },
    ],
  };
  return (
    <Container>
      <h2>{title}</h2>
      <Slider {...settings}>
        <div className="slick-slider">
           <div className="photo_wrapper">
              <img
                className="main_image low_quality"
                src={GirlEarringOu}
                alt=""
              />
              <div className="secondary_image_with_description">
                <div className="secondary_image landscape">
                  <img
                    className="low_quality"
                    src={GirlEarringIn}
                    alt=""
                  />
                </div>
                <span className="item_text">
                    Girl with a Pearl Earring, oil painting on canvas (c.1665) by Dutch artist Johannes Vermeer, one of his most well-known works.
                </span>
              </div>
           </div>
        </div>
        <div className="slick-slider">
        <div className="photo_wrapper">
              <img
                className="main_image low_quality"
                src={MountainOu}
                alt=""
              />
              <div className="secondary_image_with_description">
                <div className="secondary_image landscape">
                  <img
                    className="low_quality"
                    src={MountainIn}
                    alt=""
                  />
                </div>
                <span className="item_text">
                    Armenia Vayots Dzor Zangak
                </span>
              </div>
           </div>
        </div>
        <div className="slick-slider">
        <div className="photo_wrapper">
              <img
                className="main_image low_quality"
                src={SpaceXOu}
                alt=""
              />
              <div className="secondary_image_with_description">
                <div className="secondary_image landscape">
                  <img
                    className="low_quality"
                    src={SpaceXIn}
                    alt=""
                  />
                </div>
                <span className="item_text">
                    Space X has launched a new Falcon 9. The rocket can be used up to 100 times
                </span>
              </div>
           </div>
        </div>
        <div className="slick-slider">
        <div className="photo_wrapper">
              <img
                className="main_image low_quality"
                src={EagleOu}
                alt=""
              />
              <div className="secondary_image_with_description">
                <div className="secondary_image landscape">
                  <img
                    className="low_quality"
                    src={EagleIn}
                    alt=""
                  />
                </div>
                <span className="item_text">
                    Eagle is the common name for many large birds of prey of the family Accipitridae.
                </span>
              </div>
           </div>
        </div>
        <div className="slick-slider">
          <div className="photo_wrapper">
                <img
                  className="main_image low_quality"
                  src={NinjaOu}
                  alt=""
                />
                <div className="secondary_image_with_description">
                  <div className="secondary_image landscape">
                    <img
                      className="low_quality"
                      src={NinjaIn}
                      alt=""
                    />
                  </div>
                  <span className="item_text">
                  Ninja Scroll is a 1993 Japanese anime, film written and directed by Yoshiaki Kawajir
                  </span>
                </div>
          </div>
        </div>
      </Slider>
    </Container>
    
  );
}
export default SliderImage;
// export default class SimpleSlider extends Component {
//   render() {
    
//   }
// }