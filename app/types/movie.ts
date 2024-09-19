export type MovieType = {
    title: string;
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
};

export type MoviesListApiResponseType = {
    page: number;
    results: MovieType[];
    total_results: number;
    total_pages: number;
};
