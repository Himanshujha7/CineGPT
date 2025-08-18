import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-45 px-16'>
        <h1 className='text-5xl font-helonik font-black'>{title}</h1>
        <p className='py-6 text-sm w-1/2 font-sans opacity-70'>{overview}</p>

        <div className='gap-4 flex'>
            <button className='w-36 flex items-center justify-center py-3 px-4 font-helonik bg-gray-700 text-white font-medium 
            rounded-md gap-2 bg-opacity-90'> <FaPlay/>Play</button>
            <button className='py-2 px-8 flex items-center justify-center gap-2 bg-gray-400 text-white font-helonik 
            font-medium rounded-md bg-opacity-90'>More Info <FaCircleInfo /></button>
        </div>
      
    </div>
  )
}

export default VideoTitle
