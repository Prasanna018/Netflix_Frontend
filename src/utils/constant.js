
export const API_END_POINT = "http://localhost:7000/api/auth/user/" // imp

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzYxYzI2NTUyYjFlYzBlNGZiMjQzNjM5N2U2NGM1MSIsIm5iZiI6MTczMTQ5ODMxMi43MTY5NDYsInN1YiI6IjY3MzQ4NWJkOWMxYTIzOGQ4YTlkM2M1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gaF800YhNDbPUlpXD3tkYL-zeZWQMJfCUJyef26AW40'
    }
};
export const Now_Playing_Movies = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular"
export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming"

export const SEARCH_MOVIES = "https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500/"