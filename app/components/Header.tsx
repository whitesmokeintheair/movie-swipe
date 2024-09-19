import Link from 'next/link';

export const Header = () => {
    return (
        <div>
            <h1>MovieSwipe</h1>
            <Link href="/mymovies" title="mymovies">
                <span>My Movies</span>
            </Link>
            <Link href="/moviesearch" title="moviesearch">
                <span>Search</span>
            </Link>
        </div>
    );
};
