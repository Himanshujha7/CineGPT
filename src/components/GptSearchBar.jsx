import React from 'react'
import { LuSend } from "react-icons/lu";
import languageConstant from '../utils/languageConstant';

const GptSearchBar = () => {
  return (
    <div className='flex justify-center items-center pt-36'>
      <div className='p-6 m-8'>
        <div className='relative group'>
          <input 
            type="text" 
            className='bg-gray-700 w-[450px] text-gray-300 pl-6 pr-16 py-5 border 
            border-transparent hover:border-gray-600 active:border-gray-500 focus:border-gray-500 focus:outline-none rounded-full transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 hover:shadow-2xl hover:shadow-purple-600/30 active:shadow-2xl active:shadow-purple-600/30' 
            placeholder={languageConstant.hindi.gptPlaceholder}
          />
          <button 
            className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 hover:bg-gradient-to-br hover:from-purple-400 hover:to-purple-600 
            active:bg-gradient-to-br active:from-purple-600 active:to-purple-700 text-white text-2xl p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95'
          > 
            <LuSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GptSearchBar
