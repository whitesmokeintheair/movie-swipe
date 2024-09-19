import { Header } from './components/Header';
import { MoviesProvider } from './providers/MyMoviesProvider';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <MoviesProvider>
                    <Header></Header>
                    {children}
                </MoviesProvider>
            </body>
        </html>
    );
}
