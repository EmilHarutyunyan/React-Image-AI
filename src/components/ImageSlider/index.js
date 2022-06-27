
import { Wrapper, Content, Title} from "./ImageSlider.styles";




function ImageSlider({children, title}) {
   return (

     <Wrapper>
       <Title>
         {title}
       </Title>
       <Content>
         {children}
       </Content>

     </Wrapper>
   
   );

}

export default ImageSlider;