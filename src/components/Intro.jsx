import React from 'react'
import { BsYoutube } from 'react-icons/bs';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoIosDocument } from "react-icons/io";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-20 pb-6">
        <h1 className='text-yellow-400 text-6xl md:text-7xl dark:mb-1 md:mb-3 font-bold'>Hi, I'm Phyo Sandar Win</h1>
        <p className="m-6 text-2xl font-medium dark:text-white">Computer Science Penultimate Student @ NTU</p>
        <div className='flex gap-8 p-10 py-3'>
          <div className='text-gray-800 text-3xl flex gap-8 p-3  dark:text-gray-200'>
            <a href="https://www.linkedin.com/in/phyosandarwin" target="_blank" >
              <FiLinkedin className='hover:text-blue-400'/>
            </a>
            <a href="https://www.github.com/phyosandarwin" target="_blank" rel="noopener noreferrer">
              <FiGithub className='hover:text-gray-400'/>
            </a>
            <a href="https://www.youtube.com/@phyosandarwin18" target="_blank" rel="noopener noreferrer">
              <BsYoutube className='hover:text-red-400'/>
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1HanqQpiwqmySohU1YatXYTbleFOG5xcB/view?usp=sharing" target='_blank' rel='noopener noreferrer' 
          className='border-2 border-black rounded-xl bg-yellow-300 font-bold px-4 py-1 flex items-center gap-2 dark:text-gray-100 dark:bg-yellow-500 hover:scale-105'>
            <IoIosDocument className='text-xl'/>
            Resume
          </a>
          
      </div>

    </div>
  )
}

export default Intro;