import axios from 'axios';
import { MoviesListApiResponseType, MovieType } from '../types/movie';
import { GenreApiResponseType, GenreType } from '../types/genre';

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTVjNzI5NTBiYzQ4NzdhOWZiZDk4MTljZDhlMTg1NSIsIm5iZiI6MTcyNDY2MTkxOC4yNDcyNTYsInN1YiI6IjY2Y2MzZmJjOWQ2ZTUwN2FjNTFkNzE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PpjohHV7MeEPNSCVIsR7nggC9KZGwzdLFHIT0cQoAPY'
    }
};

const getMoviesByGenreRequestLink = (genreIds: number[]) =>
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genreIds.join(
        ','
    )}`;
const GENRES_REQUEST_LINK = `https://api.themoviedb.org/3/genre/movie/list?language=en`;

export const fetchMoviesByGenres = async (
    genreIds: number[]
): Promise<MovieType[]> => {
    if (genreIds.length === 0) return [];

    try {
        const response = await axios.get<MoviesListApiResponseType>(
            getMoviesByGenreRequestLink(genreIds),
            API_OPTIONS
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching films:', error);
        return [];
    }
};

export const fetchGenres = async (): Promise<GenreType[]> => {
    try {
        const response = await axios.get<GenreApiResponseType>(
            GENRES_REQUEST_LINK,
            API_OPTIONS
        );

        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
    }
};
