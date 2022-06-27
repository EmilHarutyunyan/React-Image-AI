import React from "react";
import { Wrapper } from "./Flexing.styles";


function Flexing({children, alignItem}) {
   return (
      <Wrapper alignItem={alignItem}>
         {children}
      </Wrapper>
   )
}
export default Flexing;