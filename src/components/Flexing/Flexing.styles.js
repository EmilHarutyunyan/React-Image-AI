import styled from "styled-components";

export const Wrapper = styled.main`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ alignItem }) => (alignItem ? alignItem : "center")};
  animation: animateOpacityImage 1s;

  aside {
    width: 21%;
    /* position: absolute; */
    background-color: white;
    z-index: 2;
    /* transform: translate(-162px, 0px); */
    left: 0px;
    transition: all 0.5s linear;
    z-index: 10;
  }
  .clean-block {
    height: 350px;
  }
  .image-rec {
    width: 70px;
  }
  @media only screen and (max-width: 1440px) {
    aside {
      width: 33%;
    }
  }
  @media only screen and (max-width: 992px) {
    aside {
      position: absolute;
      transform: translateX(-400px);
      width: 400px;
    }
  }
  @media only screen and (max-width: 690px) {
    display: block;
  }
  @media only screen and (max-width: 475px) {
    aside {
      transform: translateX(-316px);
      width: 315px;
    }
  }
  @media only screen and (max-width: 400px) {
    aside {
      transform: translateX(-245px);
      width: 244px;
    }
  } ;
`;
