import React from "react";
// Images
import Upload from "../../images/upload/upload (1).png";
import Close from "../../images/close.png";

// Components
import Alerts from "../Alerts";

// Server
import fetchContentStyle from "../../Server/fetchContentStyle";

export default function InputContentStyle({
  imageInfo,
  removeImage,
  removeImageStyle,
  uploadImg,
  defaultBtn,
  submitOn,
  setNewImage,
  setSubmitClick,
  errorBox, setError,

}) {

  async function contentStyle() {
    if(imageInfo.activeContent && imageInfo.activeStyle) {
      setSubmitClick(true)
      const newImage = await fetchContentStyle(imageInfo);
      setNewImage(newImage);
    }
  }
  return (
    <div className='form-content__style'>
      <form
        id='formElem'
        onSubmit={e => {
          e.preventDefault();
          submitOn();
        }}
      >
        <div className={`form-content__style-box ${
            imageInfo.activeContent ? "active" : ""
          }`}
        >
          <p>Content</p>
          <div className='form-content__style-img'>
            <input
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
            {imageInfo && imageInfo.imageContentName ? imageInfo.imageContentName : "File name here"}
          </div>
        </div>
        <div className={`form-content__style-box ${
            imageInfo.activeStyle ? "active" : ""
          }`}
        >
          <p>Style</p>
          <div className='form-content__style-img'>
            <input
              id='default-btn'
              type='file'
              name='imageStyle'
              accept='image'
              className='inputFile input-style'
              onChange={uploadImg}
            />
            <div className='image'>
            {imageInfo && imageInfo.imageStyle ? (
                <img src={imageInfo.imageStyle} alt='' id='imageStyle' />
              ) : null}
              {/* {imageInfo &&
                <img src={imageInfo.inputName === 'imageStyle' && imageInfo.imageStyle} alt='' id='xoski' />
              } */}
            </div>
            <div className='content'>
              <div className='icon'>
                <img src={Upload} alt='close' />
              </div>
              <div className='text'>No file chosen, yet!</div>
            </div>
          </div>
          <div className='cancel-btn' onClick={removeImageStyle}>
            <img src={Close} alt='close' />
          </div>
          <div className='file-name'>
            {imageInfo && imageInfo.imageStyleName ? imageInfo.imageStyleName : "File name here"}
          </div>
        </div>
        <button type="button" onClick={defaultBtn.defaultContentBtn} className='custom-btn'>
          Choose a Content
        </button>
        <button type="button" onClick={defaultBtn.defaultStyleBtn} className='custom-btn'>
          Choose a Style
        </button>
        <input type='submit' className='custom-btn' onClick={contentStyle} value='Submit' />
      </form>
      <Alerts errorBox={errorBox} setError={setError}/>
    </div>
  );
}
