import styled from "styled-components";

export const Wrapper = styled.div`
  border: 2px solid var(--monoGrayLight);
  margin-top: 60px;

`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 17px;
  margin: 0 auto;
  flex-wrap: wrap;
  @media only screen and (max-width: 400px) {
    justify-content: center;
  }


`;
export const ItemContent = styled.div`
  p {
    margin-top: 6px;
  }
  &.footer-logo:first-child img{
    max-width: 170px;
    @media only screen and (max-width: 400px) {
      max-width: 110px;
    }
  }

  img {
    display: block;
    width: 100%;
    margin: 0 auto;
    height: auto;
    object-fit: cover;
    max-width: 128px;
    @media only screen and (max-width: 400px) {
      max-width: 90px;
    }
    
  }

  @media only screen and (max-width: 400px) {
      :first-child {
        margin-bottom: 20px;
      }

    }
`;