import axios, { AxiosError } from 'axios';
import { MoviesListApiResponseType, MovieType } from '../types/movie';
import { GenreApiResponseType, GenreType } from '../types/genre';
import {
    API_OPTIONS,
    GENRES_REQUEST_LINK,
    getMoviesByGenreRequestLink
} from './constants';

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
        throw new Error(
            `Error fetching movies: ${(error as AxiosError).message}`
        );
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
        throw new Error(
            `Error fetching genres: ${(error as AxiosError).message}`
        );
    }
};
