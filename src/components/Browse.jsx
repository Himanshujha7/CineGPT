import React, {useEffect} from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainConatiner from './MainConatiner';
import SecondaryConatiner from './SecondaryConatiner';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  

  return (
    <div className='scrollbar-hide'>
      <Header/>
      <MainConatiner/>
      <SecondaryConatiner/>
      {/*
          Maincontainer
            -videobackground
            -videofile
          Secondary Container
            movielist * n
              cards * n
      */}
    </div>
  )
}

export default Browse
