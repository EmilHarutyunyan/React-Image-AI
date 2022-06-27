import styled from "styled-components";

export const ContentItem = styled.div`
  width: 100%;
  max-width: 420px;

  div[data-testid="container"] {
    max-height: 350px;
  }

  @media only screen and (max-width: 900px) {
    max-width: 320px;

    div[data-testid="container"] {
      max-height: 320px;
    }
  }

  .reco-type {
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 685px) {
      height: auto;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-width: 416px;
      max-height: 346px;
      border: 2px solid;
    }
  }
`;
export const Title = styled.h4`
  font-size: var(--fontMed);
  padding: 30px 0px 15px 0px;
`;
export const SubTitle = styled.h3`
  font-size: var(--fontMed);
  padding: 45px 0px 30px 0;
  @media only screen and (max-width: 685px) {
    :last-child {
      padding-top: 0px;
    }
  }
`;