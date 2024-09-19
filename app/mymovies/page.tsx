'use client';

import { useMovies } from '../providers/MyMoviesProvider';

const MyMoviesPage = () => {
    const { myMovies, removeMovie } = useMovies();

    return (
        <div>
            <h1>My Movies List</h1>
            {myMovies.length === 0 ? (
                <p>No movies added yet.</p>
            ) : (
                <ul>
                    {myMovies.map(movie => (
                        <li key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-80 object-cover"
                            />
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                            <button onClick={() => removeMovie(movie.id)}>
                                Remove from My Movies
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyMoviesPage;
