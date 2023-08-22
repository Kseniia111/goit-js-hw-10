import axios from 'axios';

const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';


const API_KEY =
  'live_GK9iXO1QOnwzaA6MCtqQtXveiujCsN7Onc8JenS5XccP725leZHXcUzfZFBBGB2Q';

const fetchBreeds = () => {
  return axios.get(`${url1}?api_key=${API_KEY}`).then(response => {
    return response.data;
  });
};

const fetchCatByBreed = breedId => {
  return axios.get(`${url2}/${breedId}?api_key=${API_KEY}`).then(response => {
    return response.data;
  });
};

export { fetchBreeds, fetchCatByBreed };
