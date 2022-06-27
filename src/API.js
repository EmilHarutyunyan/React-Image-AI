
import deepai from 'deepai'
// import deepai from './library/deepai.min.js'

import {
//   API_URL_DEEPAI,
  API_KEY_DEEPAI,
  // DEEPAI_DEEP_DREAM,
  // DEEPAI_COLORIZER,
} from "./config";


deepai.setApiKey(API_KEY_DEEPAI);


// Image Recognition API
const apiSettings = {
  // FetchOne
  fetchOneImage: async function (type, imageID) {
    const resp = await deepai.callStandardApi((type), {
      image: document.getElementById(imageID),
    });
    return resp;
  },
  fetchRemoveBackground: async function(formData) {
    //   const res  = await (await fetch("https://sdk.photoroom.com/v1/segment", {
    //   method: "POST",
    //   headers: {
    //       "x-api-key":
    //       "b4505cdff5eacabad49b5c4057bd601d4000de06"
    //   },
    //   body: formData
    // }));
    

    const resp = await (
      await fetch(
        "https://sdk.photoroom.com/v1/segment",
        {
          method: "POST",
          headers: {
              "x-api-key":
              "b4505cdff5eacabad49b5c4057bd601d4000de06"
          },
          body: formData
        }
      )
    ).blob();
    return resp
  },
// const resp = await deepai.callStandardApi((type = "toonify"), {
//       image: document.getElementById(imageID),
//     });
//     return resp;
//   },
  // DeepAI Image Colorization (Algoritm DeOkdify)
  fetchImageColorizationID: async function (type, imageID) {
    const resp = await deepai.callStandardApi((type = "colorizer"), {
      image: document.getElementById(imageID),
    });
    return resp;
  },
  fetchImageColorizationURL: async function (type, imageURL) {
    const resp = await await deepai.callStandardApi((type = "colorizer"), {
      image: imageURL,
    });
    return resp;
  },
  // DeepAI Super Resolution - Quality Improvement
  // Super Resolution Բարձրացնում և լավացնում է նկարի որակը
  fetchSuperResolutionID: async function (type, imageID) {
    const resp = await deepai.callStandardApi((type = "torch-srgan"), {
      image: document.getElementById(imageID),
    });
    return resp;
  },
  fetchSuperResolutionURL: async function (type, imageURL) {
    const resp = await deepai.callStandardApi((type = "torch-srgan"), {
      image: imageURL,
    });
    return resp;
  },
  // DeepAI Waifu2x
  // Waifu2x is an image scaling and noise reduction program for anime-style art and other types of photos
  // Waifu2x- ը Պատկերի մեծացման և աղմուկի նվազեցման ծրագիր է անիմե ոճի արվեստի և այլ տեսակի լուսանկարների համար
  fetchWaifu2xID: async function (type, imageID) {
    const resp = await deepai.callStandardApi((type = "waifu2x"), {
      image: document.getElementById(imageID),
    });
    return resp;
  },
  fetchWaifu2xURL: async function (type, imageURL) {
    const resp = await deepai.callStandardApi((type = "waifu2x"), {
      image: imageURL,
    });
    return resp;
  },
  // DeepAI Deep Dream
  // Deep Dream Նկարե դարձնում է երազի նման փսիխոդելիկ տեսք։
  fetchDeepDreamID: async function (type, imageID) {
    const resp = await deepai.callStandardApi((type = "deepdream"), {
      image: document.getElementById(imageID),
    });
    return resp;
  },
  fetchDeepDreamURL: async function (type, imageURL) {
    const resp = await deepai.callStandardApi((type = "deepdream"), {
      image: imageURL,
    });
    return resp;
  },
  // DeepAI Toonify Photo To Anime
  // Toonify Ցանկացած անձի լուսանկարը արհեստական ինտելեկտի օգնությամբ վերածում է մուլտֆիլմի
  fetchToonifyID: async function (type, imageID) {
    const resp = await deepai.callStandardApi((type = "toonify"), {
      image: document.getElementById(imageID),
    });
    return resp;
  },
  fetchToonifyURL: async function (type, imageURL) {
    const resp = await deepai.callStandardApi((type = "toonify"), {
      image: imageURL,
    });
    return resp;
  },


  // Not Working
  // -----------------------------------------------------------------------
  // DeepAI Neural Talk 2
  // Neural Talk 2 Ամփոփում է պատկերի բովանդակությունը մեկ նախադասությամբ:

  // fetchNeuralTalkID: async function (type, imageID) {
  //   const resp = await deepai.callStandardApi((type = "neuraltalk"), {
  //     image: document.getElementById(imageID),
  //   });
  //   console.log(resp);
  //   return resp;
  // },
  // fetchNeuralTalkURL: async function (type, imageURL) {
  //   const resp = await deepai.callStandardApi((type = "neuraltalk"), {
  //     image: imageURL,
  //   });
  //   return resp;
  // },
  // DeepAI Fast Style Transfer
  fetchFastStyleID: async function (contentID, styleID) {
    const resp = await deepai.callStandardApi(("fast-style-transfer"), {
      content: document.getElementById(contentID),
      style: document.getElementById(styleID),
    });
    return resp;
  },
  fetchFastStyleURL: async function (type, contentURL, styleURL) {
    const resp = await deepai.callStandardApi((type = "fast-style-transfer"), {
      content: contentURL,
      style: styleURL,
    });
    return resp;
  },
  // DeepAI Neural Style Transfer
  fetchNeuralStyleID: async function (type, contentID, styleID) {
    const resp = await deepai.callStandardApi((type = "neural-style"), {
      content: document.getElementById(contentID),
      style: document.getElementById(styleID),
    });
    return resp;
  },
  fetchNeuralStyleURL: async function (type, contentURL, styleURL) {
    const resp = await deepai.callStandardApi((type = "neural-style"), {
      content: contentURL,
      style: styleURL,
    });
    return resp;
  },

  // ------------------------------------------------------------------------

  // Ainize DeOldify
  fetchDeOldifyURL: async function (imageURL) {
    const image = { source_url: imageURL };
    const resp = await (
      await fetch(
        "https://master-de-oldify-kmswlee.endpoint.ainize.ai/process-img-form",
        {
          body: JSON.stringify(image),
          headers: {
            Accept: "images",
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      )
    ).blob();

    // Return image blob url
    const imageRes = URL.createObjectURL(resp);
    return imageRes;
  },
  fetchDeOldifyForm: async function (formID) {
    const resp = await (
      await fetch(
        "https://master-de-oldify-kmswlee.endpoint.ainize.ai/process-img-form",
        {
          body: new FormData(formID),
          method: "POST",
        }
      )
    ).blob();

    // Return image blob url
    const imageRes = URL.createObjectURL(resp);
    return imageRes;
  },

  // Ainize HiDT
  fetchHiDTForm: async function (formID) {
    const resp = await (
      await fetch("https://master-hi-dt-psi1104.endpoint.ainize.ai/predict", {
        body: new FormData(formID),
        method: "POST",
      })
    ).blob();

    // daytime {day1 day2 day3 day4 sunset1 sunset2 sunset3 sunset4 bluehour1 bluehour2 night1 night2 night3 night4 night5 night6}
    // inference_size {256, 512, 1024}

    // Return image blob url
    const imageRes = URL.createObjectURL(resp);
    return imageRes;
  },
};



export default apiSettings;