import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const variables = {
    breedSelect: document.querySelector('.js-breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    title: document.querySelector('.header_animation'),
}

function showElement(element, isVisible) {
    element.classList.toggle('hidden', !isVisible)
}

variables.title.classList.add('header_animation', 'animation_zoomInDown')
variables.title.addEventListener('animationed', () => {
    searchCats()
})

showElement(variables.breedSelect, false)
showElement(variables.loader, true)

const slimSelect = new slimSelect({
    select: variables.breedSelect,
})

async function selectCat() {
    try {
        showElement(variables.loader, true);
        showElement(variables.catInfo, false);
        const catId = variables.breedSelect.value;
        const data = await fetchCatByBreed(catId);
        markupCats(data);
    }
    catch (error) {
        iziToast.show({
            position: 'center',
            message: 'An error have ocurred. Please reload the page'
        });
    }
    showElement(variables.loader, false)
}

function markupCats(data) {
    const imgCats = data[0].url;
    const infoCats = data[0].breeds[0];
    const cat = `<div class="card">
  <img class="img" src="${imgCats}" alt="${infoCats.name}"/>
      <div class="info">
        <h2 class="name">${infoCats.name}</h2>
        <p><span class="description">Description: </span> ${infoCats.description}</p>
        <p><span class="temperament">Temperament: </span> ${infoCats.temperament}</p>   
       </div>
</div>`;

    refs.catInfo.innerHTML = cat;
    showElement(refs.catInfo, true);
}

async function searchCats() {
    try {
        await fetchBreeds().then(breeds => {
            const data = breeds.map(({ id, name }) => ({ value: id, text: name }));
            console.log(data);
            slimSelect.setData(Array.from(data));
        });
        showElement(refs.breedSelect, true);
        refs.breedSelect.addEventListener('change', onSelectCats);
    } catch (error) {
        iziToast.show({
            position: 'topRight',
            message: 'Oops! Something went wrong! Try reloading the page!',
        });
    }
    showElement(refs.loader, false);
}