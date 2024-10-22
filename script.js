import { getMovies } from "./Api.js";
import { displayMovie, searchFilter} from "./ui.js";

let movies = [];

async function loadAfter() {
    movies = await getMovies();
    displayMovie(movies);
}

document.querySelector('#search').addEventListener('input', (event) => {
    const searchInput = event.target.value;
    searchFilter(movies, searchInput);
});

loadAfter();