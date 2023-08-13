import { catPicture, catDescription } from "../index";

const renderDescription = breed => {
    const markUpPicture = `<img class="cat-image" src="${breed.url}" alt="${breed.id}">`;
    const markUpDescription = `<h2 class="cat-description-title">${breed.breeds[0].name}</h2>
    <p class="cat-description-info">${breed.breeds[0].description}</p>
    <p class="cat-description-temper"><b>Temperament</b>${breed.breeds[0].temperament}</p>`;
    catPicture.insertAdjacentHTML('beforeend', markUpPicture);
    catDescription.insertAdjacentHTML('beforeend', markUpDescription);
};

export { renderDescription };