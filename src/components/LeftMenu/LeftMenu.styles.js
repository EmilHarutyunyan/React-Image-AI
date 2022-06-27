import styled from "styled-components";

export const Wrapper = styled.div`
  /* padding: 0 20px; */
  position: relative;
  padding: 15px 0px;
  padding-bottom: 0px;
  border: 2px solid;
  border-left: 0px;
  width: 100%;
  border-bottom: none;
  animation: animateOpacityImage 1s;

  .tassel {
    display: none;
    width: 80px;
    height: 64px;
    border: 2px solid black;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(80px, -2px);
    animation: animateOpacityImage 1s;

    img {
      width: 40px;
      height: auto;
      display: block;
      object-fit: cover;
      /* animation: rotateImg  0.5s; */
    }
  }
  /* @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } */
  @media only screen and (max-width: 992px) {
    .tassel {
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 20px 0px;
    }
  }
`;
export const Content = styled.div``;
export const LogoImg = styled.div`
  img {
    width: 80px;
    object-fit: cover;
    max-width: 100%;
    @media only screen and (max-width: 475px) {
      width: 60px;
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  margin-right: 50px;

  ul {
    /* display: flex;
    justify-content: space-between;
    flex-direction: row; */
  }
  ul > li {
    position: relative;
    border-bottom: 2px solid var(--monoGrayLight);
    /* padding: 10px;
    padding-bottom: 15px; */
  }

  ul li a {
    display: block;
    font-family: "Minimal Mono Bold";
    color: var(--monoGrayLight);
    padding: 10px;
    padding-bottom: 15px;
    /* --monoGray: #1A1A1A;
      --monoGrayDark: #0A0A0A;
      --monoGrayLight: #22272C;
      --monoGray2: #242426; */
    
    @media only screen and (max-width: 475px) {
      padding: 6px;
    }
    &.active {
      background-color: #b2b1b0;
      transition: all 0.1s linear;
    }
  }
`;
