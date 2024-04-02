import MovieCard from "./movie_card";
import React from 'react';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

interface Props {
    movies: Movie[];
    handleMovieClick: () => void;
}

export default function MovieGrid({movies, handleMovieClick}: Props){
    if(!movies.length) return null;

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                movies.map((movie) =>  (
                    <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
                ))
            }
        </div>
    );

}