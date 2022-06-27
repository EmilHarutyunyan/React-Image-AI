// API
import API from "../API"
// Helper
import { getBase64FromUrl } from "../helpers";

export default async function fetchContent(imageInfo, imageType) {


    const styleImage = await API.fetchOneImage(imageType,"imageContent");
   
    styleImage.imageName = imageInfo.imageContentName;
    console.log("​👽​ ~ file: fetchContent.js ~ line 12 ~ fetchContent ~ styleImage", styleImage)
   
    
    styleImage.dataURL = await getBase64FromUrl(styleImage.output_url )

    return styleImage;
}