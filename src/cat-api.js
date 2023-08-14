const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';


const API_KEY =
  'live_GK9iXO1QOnwzaA6MCtqQtXveiujCsN7Onc8JenS5XccP725leZHXcUzfZFBBGB2Q';

//All breeds function
const fetchBreeds = () => {
  return fetch(`${url1}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

//Single cat function by breedID
const fetchCatByBreed = breedId => {
  return fetch(`${url2}/${breedId}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export { fetchBreeds, fetchCatByBreed };
