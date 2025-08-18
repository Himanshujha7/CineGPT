import React, {useEffect} from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainConatiner from './MainConatiner';
import SecondaryConatiner from './SecondaryConatiner';

const Browse = () => {

  useNowPlayingMovies();

  
  

  return (
    <div>
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
