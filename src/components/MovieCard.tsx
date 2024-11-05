// src/components/MovieCard.tsx
import React from 'react';
import { Movie } from '../types'; // Import the Movie type

interface MovieCardProps {
    movie: Movie; // Ensure the type is correctly imported here
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
            <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
            </a>
        </div>
    );
};

export default MovieCard;
