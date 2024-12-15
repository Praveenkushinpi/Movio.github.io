document.getElementById('searchButton').addEventListener('click', searchMovies);

async function searchMovies() {

  const query = encodeURIComponent(document.getElementById('searchInput').value);  

  const apiKey = '1fe8889c';

  const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);

  

  const data = await response.json();

  console.log(data);  

  

  const movieContainer = document.getElementById('movieContainer');

  movieContainer.innerHTML = ''; // Clear previous results

  if (data.Response === 'True') {

    data.Search.forEach(movie => {

      const movieElement = document.createElement('div');

      movieElement.classList.add('movie');

      movieElement.innerHTML = `

        <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/150'}" alt="${movie.Title}">

        <h2>${movie.Title} (${movie.Year})</h2>

      `;

      movieContainer.appendChild(movieElement);

    });

  } else {

    movieContainer.innerHTML = '<p>No movies found. Try another search.</p>';

  }

}
