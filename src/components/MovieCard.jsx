import React from 'react'
import { IMG_CON_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='flex-shrink-0 w-48 cursor-pointer'>
        <img className='w-58  px-2'  
        alt = "moviecard"
        src={IMG_CON_URL + posterPath}/>
    </div>
  )
}

export default MovieCard
