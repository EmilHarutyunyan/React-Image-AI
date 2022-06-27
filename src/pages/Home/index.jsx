import React from 'react';
import ReactCompareImage from "react-compare-image";

// Components
import CompareImage from '../../components/CompareImage';
import SliderImage from '../../components/SliderImage'
// Images
import leftVernatun from '../../images/VernatunInput.jpg';
import rightVernatun from '../../images/VernatunOutput.jpg';
import leftMisha from '../../images/MishaInput.png';
import rightMisha from '../../images/MishaOutput.jpg'
import VideoRec from '../../images/VideoRecognitionn/video-gif.gif'
import TextRec from '../../images/TextRecognitionn/text-gif.gif'

// Style
import {Wrapper, ImageBox, Image} from "./Home.styles"
function Home() {

   return (
     <Wrapper>
       <CompareImage
         title="Image Recognition "
         itemTitle={["Colorizer", "Toonify"]}
       >
         <ReactCompareImage
           leftImage={leftVernatun}
           rightImage={rightVernatun}
           sliderLineColor="black"
         />
         <ReactCompareImage
           leftImage={leftMisha}
           rightImage={rightMisha}
           sliderLineColor="white"
         />
       </CompareImage>
       <SliderImage title="Deep Dream" />
       <CompareImage subTitle={["Video Recognition", "Text Recognition"]}>
         <ImageBox>
           <Image src={VideoRec} alt="Video Recognition" />
         </ImageBox>
         <ImageBox>
           <Image src={TextRec} alt="Text Recognition" />
         </ImageBox>
       </CompareImage>
     </Wrapper>
   );
}

export default Home;