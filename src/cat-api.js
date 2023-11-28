import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
    'live_BzwGQIh1LRldU74Jv51k7HTS0uxammP7qVJA1muukd6HsPHVkN3JKvMXwwZbH5VN';


export async function fetchBreeds() {
    return await axios
        .get('https://api.thecatapi.com/v1/breeds')
        .then(res => res.data);
}

export async function fetchCatByBreed(breedId) {
    return await axios
        .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(res => res.data);
}