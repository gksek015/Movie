//const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjBlMmNkYjY3MmE1NWJkMDI4Mjc5ZWNiNmJlODUzNCIsIm5iZiI6MTcyODk3MzM5MS43MjgwODQsInN1YiI6IjY3MGRjMzY1YjE1ZDk3YjFhOTNkNTE3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VXmRO6T8TgnUV26Xzr366BBuSg9bqfAzTM2CFFfPqdE'; // 본인의 API 토큰 입력
//const apiUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
//https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
    

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjBlMmNkYjY3MmE1NWJkMDI4Mjc5ZWNiNmJlODUzNCIsIm5iZiI6MTcyODk3MzM5MS43MjgwODQsInN1YiI6IjY3MGRjMzY1YjE1ZDk3YjFhOTNkNTE3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VXmRO6T8TgnUV26Xzr366BBuSg9bqfAzTM2CFFfPqdE'
    }
};

let movies=[];

const getData = async() => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
        const data = await response.json();

        movies=data.results;

        displayMovie(movies);
    } catch (error) {
        console.log(`error : ${error}`);
    }
};


const displayMovie = (movies) => {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movieCard');
        movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>평점: ${movie.vote_average}</p>`;
            movieCard.addEventListener("click", () => {
                console.log("클릭됨");
                openModal(movie);
            });
        movieList.appendChild(movieCard);
    });
};

const openModal = (movie) => {
    const modal = document.querySelector(".modal");
    const modalMain = modal.querySelector(".modalMain")

    modalMain.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <p><strong>개봉일 : ${movie.release_date}</strong></p>
        <p><strong>평점: ${movie.vote_average}</strong></p>`;

    modal.style.display = "block"};

const searchFilter = (searchInput) => {
    const filterMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    displayMovie(filterMovies);
};

document.querySelector('#search').addEventListener('input', (event) => {
    const searchInput = event.target.value;
    searchFilter(searchInput);
})

document.querySelector('#search').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        const searchInput = event.target.value;
        searchFilter(searchInput);
    }
});

getData();

// const modal = document.querySelector(".modal");
// const modalOpen = document.querySelector(".movieCard");
// const modalClose = document.querySelector(".close");

// modalOpen.addEventListener("click", function () {
//     modal.style.display = "block";
// });

// modalClose.addEventListener("click", function () {
//     modal.style.display = "none";
// });