import { fetchCatByBreed } from './js/cat-api';
import { renderDescription } from './js/render-description';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const catPicture = document.querySelector('.cat-picture');
const catDescription = document.querySelector('.cat-description');
const dataLoader = document.querySelector('.loader');

breedSelect.addEventListener('.change', onChangeSelect)

fetchAndRenderBreeds();

function onChangeSelect(event) {
    dataLoader.classList.remove('invisible');
    catPicture.innerHTML = '';
    catDescription.innerHTML = '';
    const breedId = event.target.value;
    console.log('breedId', breedId);

    fetchCatByBreed(breedId)
        .then(breed => renderDescription(breed))
        .catch(error => {
            console.error(error);
            Notiflix.Notify.failure(
                'Oops! Something went wrong! Try reloading the page!'
            );
        })
        .finally(() => dataLoader.classList.add('invisible'));
}

export { breedSelect, catPicture, catDescription, dataLoader };