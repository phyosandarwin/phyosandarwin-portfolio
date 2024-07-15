import React, { useState } from 'react';
import profile from '../assets/profilepic.png';
import { useSpring, animated, config } from 'react-spring';
const About = () => {

  //springy effect on profile pic hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly
  })

  return (
    <div className='flex flex-col mb-5 mx-auto items-center justify-center text-center pt-10'>
      <h2 className='m-4 text-4xl font-bold hover:underline decoration-yellow-400 decoration-4 underline-offset-8 dark:text-yellow-400'>About Me</h2>
      <div className='flex flex-col md:flex-row lg:flex-row items-center md:items-start justify-center gap-12'>
        <div className="w-full md:w-1/2 lg:w-1/3 m-8 text-left">
          <p className="text-md text-gray-600 dark:text-gray-300">
            I aspire to contribute to the data industry with my passion for machine learning and data science. 
            I am also eager to give frontend development a shot! In the meantime, I am taking up 
            Data Science and AI specialisation in my last 2 years of university.
          </p>
          <br />
          <p className="text-md text-gray-600 dark:text-gray-300">
            When I'm not coding, I enjoy singing and dancing freestyle 💗
          </p>
        </div>
        <animated.img
          style={{...springProps}}
          src={profile}
          alt="Phyo"
          className="w-full h-60 md:w-1/2 lg:w-1/3 object-contain"
          onMouseEnter={()=> setScale(1.1)}
          onMouseLeave={()=> setScale(1)}
        />
      </div>
    </div>
  );
};

export default About;
