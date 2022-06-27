import React, { useState } from "react";
import { Wrapper } from "./ChooseFile.styles";

// Component 

import InputBox from "../InputBox";
import Spin  from "../Spinner";


function ChooseFile({type}) {

  const [newImage, setNewImage] = useState();
  const [submitClick, setSubmitClick] = useState(false)


  return (
    <Wrapper>
        <InputBox
          imageType={type}
          setNewImage={setNewImage}
          newImage={newImage}
          setSubmitClick={setSubmitClick}
        />

      {
        !submitClick 
          ? (<div className="spin-ton"></div>)
          : (newImage !== undefined ? (
            <div className="form-content">
              <div className="form-content-box active">
              <div className='form-content-img'>
                <div className="image">
                    {/* {newImage.output_url ? ( */}
                    <img src={newImage.dataURL} alt="" />
                    {/* // ) : null} */}
                  </div>
                <div className='content'>
                  <div className='icon'>
                    {/* <img src={Upload} alt='close' /> */}
                  </div>
                  <div className='text'>No file chosen, yet!</div>
                </div>
                </div>
                <div className="file-name">
                  {newImage.imageInfo ? newImage.imageInfo : "File name here"}
                </div>
              </div>
              <a
                href={newImage.dataURL}
                rel="noreferrer"
                target="_blank"
                download={newImage.imageName}
              >
                <button type="button" className="custom-btn">
                  Download
                </button>
              </a>
            </div>
          ) : <Spin/>)
      }
      
    </Wrapper>
  );
}

export default ChooseFile;
