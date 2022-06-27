import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
  @media only screen and (max-width: 685px) {
    margin-top: 70px;
  }
`;
export const Title = styled.h3`
  font-size: var(--fontMed);
  padding: 0 15px;

  @media only screen and (max-width: 685px) {
    
    text-align: center;
  }
  
`;
export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   column-gap: 15px;
   padding: 0 15px;
   @media only screen and (max-width: 685px)
   {
      justify-content: center;
      text-align: center;
   }
`;