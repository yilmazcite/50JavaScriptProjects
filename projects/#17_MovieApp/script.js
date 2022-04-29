'use strict';

let API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

let IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

let SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

let form = document.getElementById('form');
let search = document.getElementById('search');
let main = document.getElementById('main');

//Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  let res = await fetch(url);
  let data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach(movie => {
    //Destructuring the object
    let { title, poster_path, vote_average, overview } = movie;

    let movieElement = document.createElement('div');

    movieElement.classList.add('movie');

    movieElement.innerHTML = `
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>
          ${overview}
          </p>
        </div>
      `;

    main.appendChild(movieElement);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  let searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});
