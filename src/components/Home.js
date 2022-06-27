import React from 'react';
import ReactCompareImage from "react-compare-image";

// Componets
import CompareImage from './CompareImage';
import SliderImage from './SliderImage'
// Image
import leftVernatun from '../images/VernatunInput.jpg';
import rightVernatun from '../images/VernatunOutput.jpg';
import leftMisha from '../images/MishaInput.png';
import rightMisha from '../images/MishaOutput.jpg'
import VideoRec from '../images/VideoRecognitionn/video-gif.gif'
import TextRec from '../images/TextRecognitionn/text-gif.gif'

function Home() {

   return (
     <section className="section-home">
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
         <div className="reco-type">
           <img src={VideoRec} alt="Video Recognition" />
         </div>
         <div className="reco-type">
           <img src={TextRec} alt="Text Recognition" />
         </div>
       </CompareImage>
     </section>
   );
}

export default Home;