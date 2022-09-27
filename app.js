import { getMovies } from './src/pages/fetchApi.js';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=634047cf0c0717fa2d9ec8db65d87921';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const loadApp = () => {
  getMovies(API_URL);
};

window.addEventListener('load', loadApp);
