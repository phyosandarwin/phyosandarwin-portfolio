import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FiGithub, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className='flex flex-col mb-5 mx-auto items-center justify-center text-center pt-10'>
      <h2 className='m-4 text-4xl font-bold hover:underline decoration-yellow-400 decoration-4 underline-offset-8 dark:text-yellow-400'>Contact</h2>
      <p className='text-base'>
        I am open to connecting with new people and collaborating on projects! 🥰
        <br/>
        Feel free to contact me via the channels below!
      </p>
      <div className='mt-6 flex gap-8'>
          <a href="https://www.github.com/phyosandarwin" target="_blank" rel="noopener noreferrer"
            aria-label="Follow Phyo's Github profile"
            className='flex items-center gap-2 text-gray-800 dark:text-gray-100 text-base bg-gray-100 dark:bg-gray-600 rounded-lg px-4 py-2 transition-transform duration-200 hover:scale-105 hover:text-slate-400 dark:hover:text-slate-400'>
            <FiGithub/>
            <span className='text-sm font-semibold'>Github</span>
          </a>
          <a href="https://www.linkedin.com/in/phyosandarwin" target="_blank" 
            aria-label="Connect to Phyo's LinkedIn Profile"
            className='flex items-center gap-2 text-gray-800 dark:text-gray-100 text-base bg-gray-100 dark:bg-gray-600 rounded-lg px-4 py-2 transition-transform duration-200 hover:scale-105 hover:text-blue-500 dark:hover:text-blue-300'>
            <BsLinkedin/>
            <span className='text-sm font-semibold'>LinkedIn</span>
          </a>
          <a href="mailto:phyosandarwin18@gmail.com" target="_blank" rel="noopener noreferrer"
            aria-label="Send email to Phyo"
            className='flex items-center gap-2 text-gray-800 dark:text-gray-100 text-base bg-gray-100 dark:bg-gray-600 rounded-lg px-4 py-2 transition-transform duration-200 hover:scale-105 hover:text-orange-500 dark:hover:text-orange-300'>
            <FiMail/>
            <span className='text-sm font-semibold'>Email</span>
          </a>
          
      </div>
      
    </div>
  )
}

export default Contact