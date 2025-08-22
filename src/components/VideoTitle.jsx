import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-helonik font-black w-1/2'>{title}</h1>
        <p className='py-6 text-sm w-1/4 font-sans opacity-80'>{overview}</p>

        <div className='gap-4 flex'>
            <button className='w-36 flex items-center justify-center py-3 px-4 font-helonik bg-white hover:bg-white/75 cursor-pointer text-black font-medium 
            rounded-md gap-2 transition duration-300'> <FaPlay/>Play</button>
            <button className='py-2 px-8 flex items-center justify-center gap-2 bg-gray-500/45 hover:bg-gray-500/65 transition duration-300 text-white cursor-pointer font-helonik 
            font-medium rounded-md '><FaCircleInfo className='text-xl '/>More Info </button>
        </div>
      
    </div>
  )
}

export default VideoTitle
