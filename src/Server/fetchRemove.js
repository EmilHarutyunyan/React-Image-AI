// API
import API from "../API"
// Helper
import { getBase64FromUrl } from "../helpers";

export default async function fetchRemove(formElem,imageInfo) {
    debugger
    const formData = new FormData();
    formData.append("image_file", formElem);
    // const formData.append("image_file", imageInfo,this.files[0]);
    const styleImage = await API.fetchRemoveBackground(formData);

    styleImage.imageName = imageInfo.imageContentName;
    styleImage.dataURL = await getBase64FromUrl(URL.createObjectURL(styleImage) );
   
    return styleImage;
}