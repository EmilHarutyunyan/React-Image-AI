import React from "react";
import styled from "styled-components";

export const Text = styled.div`
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
function ComingSoon() {
    return <Text><h2>Coming Soon</h2></Text>
}
export default ComingSoon