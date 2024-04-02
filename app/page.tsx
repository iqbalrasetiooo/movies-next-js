'use client'
import Image from "next/image";
import { BASE_URL } from './constant';
import React, {useState, useEffect} from "react";
import MovieGrid from "./components/movie_grid";


async function searchMovies(query: string){
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error while fetching movies', error);
    return [];
  }
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  async function handleSearch(e: any){
    e.preventDefault();
    if(!query) return;
    const result = await searchMovies(query);
    setMovies(result.results)
  }


  return (
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-white font-extrabold text-center text-4xl mt-20">Movie Explorer App</h1>
          <form onSubmit={handleSearch} className="mt-8 mb-8">
            <input 
            className="px-5 py-3 rounded-md w-80 text-gray-800 focus:border-none"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            />
            <button 
            type="submit"
            className="ml-2 px-5 py-3 bg-blue-500 text-white rounded"
            >Search</button>
        </form>
        <MovieGrid movies={movies} handleMovieClick={() => null}/>
      </div>
  );
}
