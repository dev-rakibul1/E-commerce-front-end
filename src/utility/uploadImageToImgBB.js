import axios from "axios";

export const uploadImageToImgBB = async (imageFile) => {
  try {
    const imgBBAPIKey = "15722e7d8f0b4b66dd4b14222730ae7b";
    const formData = new FormData();
    formData.append("image", imageFile);

    const imgBBUploadResponse = await axios.post(
      `https://api.imgbb.com/1/upload?key=${imgBBAPIKey}`,
      formData
    );

    // Log the API key (for debugging purposes)
    // console.log(imgBBAPIKey);

    // Check if the response is successful before accessing data
    if (imgBBUploadResponse.data && imgBBUploadResponse.data.data) {
      return imgBBUploadResponse.data.data.url;
    } else {
      throw new Error("Invalid response format from ImgBB API");
    }
  } catch (error) {
    // Handle errors here
    console.error("Error uploading image to ImgBB:", error.message);
    throw error; // rethrow the error if needed
  }
};
