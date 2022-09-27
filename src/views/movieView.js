import { getColor, getPopularity } from '../pages/getVotePopularity.js';
import { getMovies } from '../pages/fetchApi.js';

const API_KEY = 'api_key=634047cf0c0717fa2d9ec8db65d87921';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

export function showMovies(data) {
  main.innerHTML = '';
  let count = 0;
  data.forEach((movie) => {
    const {
      title,
      vote_average,
      poster_path,
      overview,
      release_date,
      original_language,
      popularity,
    } = movie;
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.dataset.count = count; //0
    movieElement.innerHTML = `
         <img src="${IMG_URL + poster_path}" alt="${title}" />

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <button type="button" class="button1" id="button">More Info</button>
      
        <div class="info-part">
        <p class="overview">${overview}</p>
        <p class= "date">Release Date: ${release_date}</p>
        <p class= "language">Original Language: ${original_language}</p>
        <span class="${getPopularity(
          popularity,
        )}" id="popularity">Popularity: ${popularity}</span>

        <button type="button" class="close" id="close">Close</button>

        </div>
        
        
        
    `;

    main.appendChild(movieElement);
    count++;
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchMovie = search.value;

  if (searchMovie) {
    getMovies(SEARCH_URL + '&query=' + searchMovie);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.id === 'button') {
    document.querySelectorAll('.info-part').forEach((movie) => {
      if (
        movie.parentNode.dataset.count === e.target.parentNode.dataset.count
      ) {
        movie.style.display = 'inline';
      }
    });
  }

  if (e.target.id === 'close') {
    document.querySelectorAll('.info-part').forEach((movie) => {
      if (
        movie.parentNode.dataset.count ===
        e.target.parentNode.parentNode.dataset.count
      ) {
        movie.style.display = 'none';
      }
    });
  }
});
