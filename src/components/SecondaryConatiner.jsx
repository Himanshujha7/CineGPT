import React from 'react'
import MovieList from './MovieList.jsx'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
  //movie lst - popular
  //movie list - now playing
  //movie list trending
  //movie list - genre
  const movies = useSelector(store => store.movies);

  return (
    <div className=' bg-black'>
      <div className='relative z-20 -mt-70'>
        <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies = {movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies = {movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies = {movies.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryConatiner;
