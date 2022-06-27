// API
import API from "../API"


export default async function fetchContentSelect(id, imageInfo) {
    
    const styleImage = {}
    const blobUrl = await API.fetchHiDTForm(id);

    styleImage.imageName = imageInfo.imageContentName;
    styleImage.dataURL = blobUrl
    
    return styleImage;

}