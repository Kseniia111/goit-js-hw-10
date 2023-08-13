import Notiflix from "notiflix";
import { breedSelect, dataLoader } from "../index";
import { fetchBreeds } from "./cat-api";
import { renderBreeds } from "./render-breeds";

const fetchAndBreeds = () => {
    dataLoader.classList.remove('invisible');
    fetchBreeds()
        .then(breeds => renderBreeds(breeds))
        .catch(error => {
            console.error(error);
            Notiflix.Notify.failure(
                'Oops! Something went wrong! Try reloading the page!'
            );
        })
        .finally(() => {
            dataLoader.classList.add('invisible');
            breedSelect.classList.remove('invisible');
        });
};

export { fetchAndBreeds };