import React,{useState, useEffect, useCallback} from "react";

// // Server
// import fetchContentStyle from "../../Server/fetchContentStyle";

// Components
import InputContent from "./InputContent";
import InputContentSelect from "./InputContentSelect";
import InputContentStyle from "./InputContentStyle";
import InputRemove from "./inputRemove"

// import imageCompress from "../ImageCompress";




function InputBox({ imageType, setNewImage, setSubmitClick}) {

  const [errorBox, setErrorBox] = useState(false);

  function defaultContentBtn() {
    const inputFile = document.querySelector(".input-content");
    inputFile.click();
  }
  function defaultStyleBtn() {
    const inputFile = document.querySelector(".input-style");
    inputFile.click();
  }

  const initialImage = {
    image: "",
    activeContent: false,
    activeStyle: false,
    imageContentName: "",
    imageContent: "",
    imageStyleName: "",
    imageStyle: "",
  };
  

  const [imageInfo, setImageInfo] = useState(initialImage);

  
  
  const newImageSumbit = useCallback(
    () => {
      // console.log("ASASas");
      setNewImage();
      setSubmitClick(false)
      
    },
    [setNewImage,setSubmitClick],)

  // UpDate and UnMouthing
  useEffect(() => {
    
    const inputFile = document.querySelector(".inputFile");
    if(inputFile) {
      inputFile.value = "";
    }
    
    return () => {
      newImageSumbit();
      // setNewImage();
      // setSubmitClick(false)
      setImageInfo({
        image: "",
        activeContent: false,
        activeStyle: false,
        imageContentName: "",
        imageContent: "",
        imageStyleName: "",
        imageStyle: "",
      })
    };
  },[newImageSumbit,imageType]);

  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }

  async function uploadImg(e) {
    try {
      
      let file = e.target.files[0];

      const inputName = e.target.name;
      // const imageComp = await imageCompress(file);
      if(file.size > 3000000) {
        throw new Error('oops')
      }


      // Create To data64
      let contentBuffer = await readFileAsync(file);


      // Create Url
      // const rr = URL.createObjectURL(file);
      let valueStore = file.name;
      
      
      
      setImageInfo({
        image: contentBuffer,
        activeContent:  inputName === "imageContent" || inputName === "source" ? valueStore : imageInfo.activeContent,
        activeStyle: inputName === "imageStyle" ? true : imageInfo.activeStyle,
        imageContentName: inputName === "imageContent" || inputName === "source" ? valueStore : imageInfo.imageContentName,
        imageContent: inputName === "imageContent" || inputName === "source" ? contentBuffer : imageInfo.imageContent,
        imageStyleName: inputName === "imageStyle" ? valueStore : imageInfo.imageStyleName,
        imageStyle: inputName === "imageStyle" ? contentBuffer : imageInfo.imageStyle,
        
      });
    } catch (err) {
      const inputFile = document.querySelector(".inputFile");
      if(inputFile) {
        inputFile.value = "";
      }
      setErrorBox(true);
    }
  }

  function removeImage() {
    const inputFile = document.querySelectorAll("input-content");
    inputFile.values = "";
    setImageInfo({
      ...imageInfo,
      activeContent: false,
      imageContentName: "",
      imageContent: "",
    });
  }
  function removeImageStyle() {
    const inputFile = document.querySelectorAll("input-style");
    inputFile.values = "";
    setImageInfo({
      ...imageInfo,
      activeStyle: false,
      imageStyleName: "",
      imageStyle: "",
    });
  }

  function submitOn() {
    // setSubmitClick(true)
    setNewImage();
  }


  switch (imageType) {
    case "neural-style":
      return (
        <InputContentStyle 
          imageInfo={imageInfo}
          removeImage={removeImage}
          uploadImg={uploadImg}
          defaultBtn={{defaultContentBtn, defaultStyleBtn}}
          removeImageStyle={removeImageStyle}
          submitOn={submitOn}
          setNewImage={setNewImage}
          setSubmitClick={setSubmitClick}
          errorBox={errorBox}
          setError = {setErrorBox}
        />
      )
    
    case "hidt":
      return (
        <InputContentSelect 
          imageInfo={imageInfo}
          removeImage={removeImage}
          uploadImg={uploadImg}
          defaultBtnActive={defaultContentBtn}
          submitOn={submitOn}
          setNewImage={setNewImage}
          setSubmitClick={setSubmitClick}
          errorBox={errorBox}
          setError = {setErrorBox}
        />
      )
      case "remove-background":
      return (
        <InputRemove
          imageInfo={imageInfo}
          removeImage={removeImage}
          uploadImg={uploadImg}
          defaultBtn={defaultContentBtn}
          submitOn={submitOn}
          setNewImage={setNewImage}
          imageType={imageType}
          setSubmitClick={setSubmitClick}
          errorBox={errorBox}
          setError = {setErrorBox}
        />
      )
    default:
      return (
        <InputContent
          imageInfo={imageInfo}
          removeImage={removeImage}
          uploadImg={uploadImg}
          defaultBtn={defaultContentBtn}
          submitOn={submitOn}
          setNewImage={setNewImage}
          imageType={imageType}
          setSubmitClick={setSubmitClick}
          errorBox={errorBox}
          setError = {setErrorBox}
        />
      );
  }
}

export default InputBox;
