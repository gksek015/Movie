const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjBlMmNkYjY3MmE1NWJkMDI4Mjc5ZWNiNmJlODUzNCIsIm5iZiI6MTcyODk3MzM5MS43MjgwODQsInN1YiI6IjY3MGRjMzY1YjE1ZDk3YjFhOTNkNTE3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VXmRO6T8TgnUV26Xzr366BBuSg9bqfAzTM2CFFfPqdE';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

console.log(apiUrl);

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
    }
};

export async function getMovies() {
    try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        // displayMovie(data.results);
        return data.results;

    } catch (error) {
        console.log(`error: ${error}`);
        return [];
    }
};