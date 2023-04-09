// randomImage.js
import axios from 'axios';

export async function getRandomImage() {
  try {
    const response = await axios.get(process.env.RANDOM_IMAGE_API);
    return response.request.res.responseUrl;
  } catch (error) {
    console.error('Error fetching random image:', error);
    return null;
  }
}
