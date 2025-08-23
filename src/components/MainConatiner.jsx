import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const MainConatiner = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    

    if(!movies) return;

    const mainMovie = movies[4];
    //console.log(mainMovie);

    const {title, overview, id} =mainMovie;

  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBg movieId={id}/>
      
    </div>
  )
}

export default MainConatiner
