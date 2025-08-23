import React from 'react'
import { IMG_CON_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  
  return (
    <div className='flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-52 cursor-pointer'>
      <img 
        className='w-full h-auto hover:scale-105 hover:opacity-95 transition-transform duration-300 rounded-lg shadow-md px-1 sm:px-2'  
        alt="Movie Card"
        src={IMG_CON_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard
