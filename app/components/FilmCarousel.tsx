'use client';

import { useState } from 'react';
import { MovieType } from '../types/movie';
import { useMovies } from '../providers/MyMoviesProvider';

export default function FilmCarousel({ films }: { films: MovieType[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentFilm = films[currentIndex];

    const { addMovie } = useMovies();

    const handleLike = () => {
        addMovie(currentFilm);
        nextFilm();
    };

    const handleDislike = () => {
        nextFilm();
    };

    const nextFilm = () => {
        if (currentIndex < films.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            alert('No more films to show!');
        }
    };

    return (
        <div className="flex flex-col items-center">
            {currentFilm ? (
                <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mb-8">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${currentFilm.poster_path}`}
                        alt={currentFilm.title}
                        className="w-full h-80 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                            {currentFilm.title}
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {currentFilm.overview}
                        </p>
                        <div className="flex justify-between">
                            <button
                                onClick={handleLike}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                            >
                                Like
                            </button>
                            <button
                                onClick={handleDislike}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
                            >
                                Dislike
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No films available</p>
            )}
        </div>
    );
}
