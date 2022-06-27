import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Button = styled.button` 
  display: none;
  background-color: transparent;

  svg {
    font-size: 30px;
  }

  @media only screen and (max-width: 992px) {
    display: block;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  flex-wrap: wrap;
`;
export const LogoImg = styled.div`
  img {
    width: 80px;
    object-fit: cover;
    max-width: 100%;
  }
`;

export const NavLinks = styled.nav`
  width: 65%;
  margin-right: 50px;
  border-bottom: 2px solid var(--monoGrayLight);

  @media only screen and (max-width: 992px) {
    width: 100%;
    transition: height 0.35s ease;
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    margin-right: 0px;
    border-bottom: none;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height 0.5s ease-out;
    -o-transition: max-height 0.5s ease-out;
    -moz-transition: max-height 0.5s ease-out;
    transition: max-height 0.5s ease-out;
  }
`;

export const Link = styled.ul`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    border: 1px solid;
  }
`;

export const ListItem = styled.li`
  position: relative;
  @media only screen and (max-width: 992px) {
    border-bottom: 1px solid;
  }
  &:last-child {
    border: none;
  }
  /* padding: 10px;
    padding-bottom: 15px; */
  /* margin: 0px 0px 0px 20px; */

  a {
    display: block;
    font-family: 'Minimal Mono Bold';
    color: var(--monoGrayLight);
    padding: 10px;
    padding-bottom: 15px;
    /* --monoGray: #1A1A1A;
      --monoGrayDark: #0A0A0A;
      --monoGrayLight: #22272C;
      --monoGray2: #242426; */
    &.active {
      background-color: #b2b1b0;
      transition: all 0.1s linear;
    }
  }
`;
