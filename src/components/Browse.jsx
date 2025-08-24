import React, {useEffect} from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainConatiner from './MainConatiner';
import SecondaryConatiner from './SecondaryConatiner';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptSearchView = useSelector(store => store.gpt.showGptSearch);
  
  

  return (
    <div className='scrollbar-hide'>
      <Header/>
      {
        showGptSearchView ? 
        (<GptSearch/>) 
        :
        <>
          <MainConatiner/>
          <SecondaryConatiner/>
        </>
      }
      
    </div>
  )
}

export default Browse
