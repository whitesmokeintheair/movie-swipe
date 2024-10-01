'use client';

import { useEffect, useState } from 'react';

import MovieCarousel from '../components/MovieCarousel';
import { fetchGenres, fetchMoviesByGenres } from '../api/tmdb';
import { GenreType } from '../types/genre';
import { MovieType } from '../types/movie';

export default function MovieSearchPage() {
    const [categories, setCategories] = useState<GenreType[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [moviesList, setMoviesList] = useState<MovieType[]>([]);

    const isCategoriesListEmpty = categories.length === 0;
    const searchButtonDisabled = selectedCategories.length === 0;

    useEffect(() => {
        if (!isCategoriesListEmpty) return;

        fetchGenres().then(genres => {
            setCategories(genres);
        });
    }, []);

    const handleCategoryChange = (id: number) => () => {
        setSelectedCategories(prev =>
            prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]
        );
    };

    const searchMovies = async () => {
        const moviesList = await fetchMoviesByGenres(selectedCategories);
        setMoviesList(moviesList);
    };

    return (
        <div>
            <h2>Choose Categories</h2>
            <div>
                {categories?.map(category => (
                    <label key={category.id}>
                        <input
                            type="checkbox"
                            value={category.id}
                            onChange={handleCategoryChange(category.id)}
                        />
                        {category.name}
                    </label>
                ))}
            </div>

            <button onClick={searchMovies} disabled={searchButtonDisabled}>
                Search Movies
            </button>

            {moviesList.length > 0 && <MovieCarousel movies={moviesList} />}
        </div>
    );
}
