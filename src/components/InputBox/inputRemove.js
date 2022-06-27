import React, {useRef} from "react";
// Images
import Upload from "../../images/upload/upload (1).png";
import Close from "../../images/close.png";

// Components
import Alerts from "../Alerts";

// Server
import fetchRemove from "../../Server/fetchRemove";

export default function InputContent({imageInfo, removeImage, uploadImg, defaultBtn, submitOn, setNewImage,setSubmitClick,errorBox, setError}) {

  const inptImage = useRef()
  async function content(formElem,imageInfo) {
    if(imageInfo.activeContent) {
      setSubmitClick(true)
      const newImage = await fetchRemove(formElem,imageInfo)
      return setNewImage(newImage)
    }

  }

  return (

    <div className='form-content'>
      <form
        id='formElem'
        onSubmit={e => {
          e.preventDefault();

          content(inptImage.current.files[0], imageInfo)
          submitOn();
        }}
      >
        <div className={`form-content-box ${
            imageInfo.activeContent ? "active" : ""
          }`}
        >
          <div className='form-content-img'>
            <input
              ref={inptImage}
              id='default-btn'
              type='file'
              name='imageContent'
              accept='image'
              className='inputFile input-content'
              onChange={uploadImg}
            />
            <div className='image'>
              {imageInfo && imageInfo.imageContent ? (
                <img src={imageInfo.imageContent} alt='' id='imageContent' />
              ) : null}
            </div>
            <div className='content'>
              <div className='icon'>
                <img src={Upload} alt='close' />
              </div>
              <div className='text'>No file chosen, yet!</div>
            </div>
          </div>
          <div className='cancel-btn' onClick={removeImage}>
            <img src={Close} alt='close' />
          </div>
          <div className='file-name'>
            {imageInfo.imageContentName ? imageInfo.imageContentName : "File name here"}
          </div>
        </div>
        <button type="button" onClick={defaultBtn} className='custom-btn'>
          Choose a file
        </button>
        <input type='submit' className='custom-btn' value='Submit' />
      </form>
      <Alerts errorBox={errorBox} setError={setError}/>
    </div>
  );
}
