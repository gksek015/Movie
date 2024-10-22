// 카드 추가
export function displayMovie (movies) {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movieCard');
        movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <div class="cardIn">
            <h3>${movie.title}</h3>
            <p>평점  ${movie.vote_average}</p>
        </div>`;

            movieCard.addEventListener("click", () => {
                openModal(movie);
            });

        movieList.appendChild(movieCard);
    });
};

// 모달창 열고 닫기
export function openModal(movie) {
    const modal = document.querySelector(".modal");
    const modalMain = modal.querySelector(".modalMain")

    modalMain.innerHTML = `
        <span class="close">x</span>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <p><strong>개봉일 : ${movie.release_date}</strong></p>
        <p><strong>평점: ${movie.vote_average}</strong></p>`;

    modal.style.display = "block"

    // x클릭하면 닫기
    const modalClose = document.querySelector(".close");
    modalClose.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 외부 클릭하면 닫기
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    })
};


// 영화 검색 필터
export function searchFilter(movies, searchInput) {
    const filterMovies = movies.filter(movie => {
        const title = movie.title.toLowerCase();
        const search = searchInput.toLowerCase();
        return title.indexOf(search) === 0;
    });
    displayMovie(filterMovies);
};