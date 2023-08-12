import { breedSelect } from "../index";
import SlimSelect from "slim-select";
import 'slim-select/dist/slimselect.css';

const renderBreeds = breeds => {
    const markUp = breeds
        .map(breed => {
            return `<option value="${breed.reference_image_id}">${breed.name}</option>`;
        }).join('');
    breedSelect.insertAdjacentHTML("beforeend", markUp);

    new SlimSelect({
        select: '#single',
    });
};

export { renderBreeds };
