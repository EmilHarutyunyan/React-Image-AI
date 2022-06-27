import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    font-size: 80px;
    text-align: center;
    position: relative;
    z-index: 1;
    height: 100%;
    animation: animateOpacityImage 1s;
    h2 {
        margin: auto;
    }
    @media only screen and (max-width: 475px) {
        font-size: 40px;
    }

`;
function NotFound() {
   return (
      <Wrapper><h2>Not Found</h2></Wrapper>
   )
}
export default NotFound;