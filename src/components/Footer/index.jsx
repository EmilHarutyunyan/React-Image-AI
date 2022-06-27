import React from 'react';
import { Wrapper, Content, ItemContent } from './Footer.styles';

// Images
import Harutyunyan from "../../images/Logo/Logo.png"
import Eye from "../../images/Footer/logo-footer.png"
function Footer() {
   return (
     <footer>
       <Wrapper>
         <Content>
          <ItemContent >
              <img src={Harutyunyan} alt="Harutyunyan"/>
              <p>God and Homeland</p>
          </ItemContent>
          <ItemContent>
              <img src={Eye} alt="Eye of Providence" />
              <p>In God We Trust</p>
          </ItemContent>
         </Content>
       </Wrapper>
     </footer>
   );
}
export default Footer;