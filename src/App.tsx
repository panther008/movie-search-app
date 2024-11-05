import React, { useState } from 'react';
import axiosInstance from './api/axiosInstance';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import { Movie, OMDbResponse } from './types'; // Import the types

const App: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);

    const searchMovies = async () => {
        if (!query) return;
        try {
            // Make the API call
            const response = await axiosInstance.get<OMDbResponse>('', {
                params: {
                    s: query,
                },
            });

            // Access data from the response
            const data = response.data; // This is where the response data is located

            if (data.Response === "True" && data.Search) {
                setMovies(data.Search.slice(0, 3)); // Get top 3 movies
                setError(null);
            } else {
                setMovies([]);
                setError(data.Error || 'No results found.');
            }
        } catch (error) {
            setError('Failed to fetch movies. Please try again.');
            setMovies([]);
        }
    };

    return (
        <div className="app">
            <h1>Movie Search</h1>
            <SearchBar query={query} setQuery={setQuery} />
            <button onClick={searchMovies} className="search-button">Search</button>
            <div className="movie-list">
                {error && <p>{error}</p>}
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
};

export default App;
