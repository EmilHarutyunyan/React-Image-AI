// API
import API from "../API"
// Helper
import { getBase64FromUrl } from "../helpers";

export default async function fetchContentStyle(imageInfo) {


    const styleImage = await API.fetchFastStyleID('imageContent',"imageStyle");
    
    styleImage.imageInfo = imageInfo.imageContentName;
    styleImage.dataURL = await getBase64FromUrl(styleImage.output_url )

    return styleImage;
}