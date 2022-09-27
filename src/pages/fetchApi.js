import { showMovies } from '../views/movieView.js';

export async function getMovies(url) {
  try {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        showMovies(data.results);
      });
  } catch (error) {
    throw new Error('HTTP Error');
  }
}
