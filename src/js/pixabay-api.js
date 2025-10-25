import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52812196-5a943dca1ddd7edd2406579c3";



export async function getImagesByQuery(query, page = 1) {
    try {
        const response = await axios.get(BASE_URL, {
        params: {
         key: API_KEY,
         q: query,
         page: page,
         per_page: 15,
         image_type: 'photo',
         orientation: 'horizontal',
         safesearch: true,
            }
        })
        return response.data;
}
    catch (error) {
    throw new Error(error.message);
  }
}; 