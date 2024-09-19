'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { MovieType } from '../types/movie';

type MoviesContextType = {
    myMovies: MovieType[];
    addMovie: (movie: MovieType) => void;
    removeMovie: (movieId: number) => void;
};

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export const MoviesProvider = ({ children }: { children: ReactNode }) => {
    const [myMovies, setMyMovies] = useState<MovieType[]>([]);

    const addMovie = (movie: MovieType) => {
        setMyMovies(prevMovies => [...prevMovies, movie]);
    };

    const removeMovie = (movieId: number) => {
        setMyMovies(prevMovies =>
            prevMovies.filter(movie => movie.id !== movieId)
        );
    };

    return (
        <MoviesContext.Provider value={{ myMovies, addMovie, removeMovie }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMovies = () => {
    const context = useContext(MoviesContext);
    if (!context) {
        throw new Error('useMovies must be used within a MoviesProvider');
    }
    return context;
};
