import React from 'react'
import MovieCard from './MovieCard.jsx'

const MovieList = ({title, movies}) => {
    //console.log(movies);
  if (!movies || movies.length === 0) {
    return null;
  }
  return (
    <div className='bg-black'>
        <div className='flex-col  px-4 py-2'>
            <h1 className='text-3xl py-2 font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll  scrollbar-hide px-4'>
              {movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
