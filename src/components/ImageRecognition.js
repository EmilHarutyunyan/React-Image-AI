import React from "react";
import { useParams } from "react-router";

// Components
import ChooseFile from "./ChooseFile";
import LeftMenu from "./LeftMenu";
import Flexing from "./Flexing";

function ImageRecognition() {

  const { imageTitle } = useParams();
  console.log(useParams());
  return (
        <Flexing alignItem="flex-start">
          <LeftMenu />
          {
            imageTitle ? <ChooseFile type={imageTitle} className="image-rec"/> : ""
          }
       </Flexing>
  );
}
export default ImageRecognition;
