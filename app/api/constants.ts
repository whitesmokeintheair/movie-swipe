const API_KEY = process.env.API_KEY;
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMoviesByGenreRequestLink = (genreIds: number[]) =>
    `${BASE_URL}/discover/movie?wi th_genres=${genreIds.join(',')}`;

export const GENRES_REQUEST_LINK = `${BASE_URL}/genre/movie/list?language=en`;
