import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div className='bg-slate-900'>
      <GptSearchBar/>
      <GptMovieSuggestion/>

    </div>
  )
}

export default GptSearch
