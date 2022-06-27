import React from "react";
// Images
import Upload from "../../images/upload/upload (1).png";
import Close from "../../images/close.png";

// Components
import Alerts from "../Alerts";

// Server
import fetchContentSelect from "../../Server/fetchContentSelect";
import SelectForm from "./SelectForm";

function InputContentSection({imageInfo, removeImage, uploadImg, defaultBtn, submitOn, setNewImage,setSubmitClick,errorBox, setError}) {
    
    async function content(formElem, imageInfo) {
      
      if(imageInfo.activeContent) {
        setSubmitClick(true)
        const newImage = await fetchContentSelect(formElem,imageInfo)
        return setNewImage(newImage)
      }
    }

    return (
    <div className='form-content'>
    <form
      id='formElem'
      onSubmit={e => {
        e.preventDefault();
        content(e.target,imageInfo)
        submitOn();
      }}
    >
<input type="text" name="inference_size" defaultValue={512} style={{display: 'none'}} />

      <div className={`form-content-box ${
          imageInfo.activeContent ? "active" : ""
        }`}
      >
        <div className='form-content-img'>
          <input
            id='default-btn'
            type='file'
            name='source'
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
      <SelectForm />
      <button type="button" onClick={defaultBtn} className='custom-btn'>
        Choose a file
      </button>
      <input type='submit' className='custom-btn' value='Submit' />
    </form>
    <Alerts errorBox={errorBox} setError={setError}/>
  </div>
    )
}

export default InputContentSection

