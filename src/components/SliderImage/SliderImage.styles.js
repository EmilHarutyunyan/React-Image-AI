import styled from "styled-components";

export const Container = styled.div`
  
  text-align: center;
  background-color: var(--monoGrayLight);
  color: var(--white);

  h2 {
    font-family: "Minimal Mono Black", sans-serif;
    padding: 55px 15px;

    font-size: var(--fontBig);
  }
  .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
  }
  .slick-list {
    height: 100% !important;
  }
  .slick-arrow {
    position: absolute;
    color: black;
    width: 64px;
    height: 64px;
    align-items: center;
    transform: translate(0%, -150%);

    @media only screen and (max-width: 375px) {
      transform: translate(0%, -150%);
      .slick-prev {
        left: 10px;
      }
    }

    circle {
      fill: #ffffffc7;
      transition: all 0.3s linear;
    }
    path {
      fill: #000;
    }
    &:hover {
      circle {
        fill: #fff;
      }
    }
  }
  .slick-disabled {
    cursor: default;
    background: green;
    opacity: 0.5;
  }
  .slick-prev {
    left: 60px;
    z-index: 100;
    &::before {
      display: none;
    }
    @media only screen and (max-width: 375px) {
      left: 10px;
    }
  }
  .slick-next {
    right: 60px;
    z-index: 100;
    &::before {
      display: none;
    }
    @media only screen and (max-width: 375px) {
      right: 10px;
    }
  }
  .slick-dots {
    /* position: relative; */
    bottom: 15px;
  }
  .slick-dots li button:before {
    font-size: 15px;
    opacity: 0.75;
    color: var(--white);
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: var(--monoGrayDark);
  }
  .photo_wrapper {
    color: #3498db;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;

    .main_image {
      width: 100%;
      object-fit: cover;
      margin: 0 auto;
      max-width: 563px;
      max-height: 350px;
    }
    .secondary_image_with_description {
      top: 100%;
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      transform: translate(20%, -25%);

      @media only screen and (max-width: 768px) {
        transform: translate(0%, -20%);
      }
      img {
        width: 100%;
        object-fit: cover;
        margin: 0 auto;
        max-width: 252px;
      }
    }
    .secondary_image {
      border: 2px solid #fff;
    }
    .item_text {
      margin-top: 25px;
      margin-left: 10px;

      left: 100%;
      width: 100%;
      font-size: 13px;
      letter-spacing: 0.3px;
      line-height: 20px;
      color: #ccc;
      max-width: 270px;
      @media only screen and (max-width: 375px) {
        font-size: 12px;
        letter-spacing: 0.2px;
        line-height: 13px;
      }

      @media only screen and (max-width: 320px) {
        font-size: 10px;
        letter-spacing: 0.1px;
        line-height: 12px;
      }
    }
  }
`;
