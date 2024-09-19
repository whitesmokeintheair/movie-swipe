'use client';

import { useEffect, useState } from 'react';

import FilmCarousel from '../components/FilmCarousel';
import { fetchGenres, fetchMoviesByGenres } from '../api/movies';
import { GenreType } from '../types/genre';

const FilmSearchPage = () => {
    const [categories, setCategories] = useState<GenreType[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [films, setFilms] = useState<any[]>([]);

    useEffect(() => {
        if (categories.length > 0) return;

        fetchGenres()
            .then(genres => {
                setCategories(genres);
            })
            .catch(error => {
                console.error('Error fetching genres:', error);
            });
    }, []);

    const handleCategoryChange = (id: number) => {
        setSelectedCategories(prev =>
            prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]
        );
    };

    const searchFilms = async () => {
        const moviesList = await fetchMoviesByGenres(selectedCategories);
        setFilms(moviesList);
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
                            onChange={() => handleCategoryChange(category.id)}
                        />
                        {category.name}
                    </label>
                ))}
            </div>
            <button onClick={searchFilms}>Search Films</button>
            {films.length > 0 && <FilmCarousel films={films} />}
        </div>
    );
};

export default FilmSearchPage;
