import { loaderEl, breedSelect } from './index';
import { fetchBreeds } from './cat-api';
import { renderBreedsSelect } from './renderBreedsSelect';
 
const fetchAndRenderBreeds = () => {
  loaderEl.classList.remove('invisible');
  fetchBreeds()
    // .then(breeds => console.log(breeds))
    .then(breeds => renderBreedsSelect(breeds))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      loaderEl.classList.add('invisible');
      breedSelect.classList.remove('invisible');
    });
};

export { fetchAndRenderBreeds };
