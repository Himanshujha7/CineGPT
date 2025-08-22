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
    <div>
      <MovieList title={"NowPlaying"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies = {movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryConatiner;
