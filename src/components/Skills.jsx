import React, { useState } from 'react';
import { MdComputer } from 'react-icons/md';
import { FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaLaptopCode, FaPython, FaJava, FaPhp, FaCss3, FaBrain, FaRobot } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiFlask, SiMysql, SiHtml5, SiJavascript, SiPytorch, SiPandas, SiScikitlearn, SiStreamlit, SiTableau } from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';

const data = [
    {
        label: "Frontend",
        value: "frontend",
        icon: <MdComputer />,
        desc: (
            <div className="grid grid-cols-3 gap-4 justify-center">
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-blue-500 hover:cursor-pointer">
                    <FaReact className="text-xl" />
                    <span className='ml-2 text-sm'>React</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-amber-500 hover:cursor-pointer">
                    <SiVite className="text-xl"/>
                    <span className='ml-2 text-sm'>Vite</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-purple-500 hover:cursor-pointer">
                    <FaBootstrap className="text-xl" />
                    <span className='ml-2 text-sm'>Bootstrap</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-blue-400 hover:cursor-pointer">
                    <SiTailwindcss className="text-xl" />
                    <span className='ml-2 text-sm'>Tailwind CSS</span>
                </div>
            </div>
        ),
    },
    {
        label: "Backend",
        value: "backend",
        icon: <FaDatabase />,
        desc: (
            <div className="grid grid-cols-3 gap-4 justify-center">
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-green-500 hover:cursor-pointer">
                    <FaNodeJs className="text-xl" />
                    <span className='ml-2 text-sm'>Node.js</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-pink-500 hover:cursor-pointer">
                    <SiFlask className='text-xl'/>
                    <span className='ml-2 text-sm'>Flask</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-blue-400 hover:cursor-pointer">
                    <SiMysql className="text-xl" />
                    <span className='ml-2 text-sm'>MySQL</span>
                </div>
            </div>
        ),
    },
    {
        label: "Languages",
        value: "languages",
        icon: <FaLaptopCode />,
        desc: (
            <div className="grid grid-cols-3 gap-4 justify-center">
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-blue-400 hover:cursor-pointer">
                    <FaPython className="text-xl" />
                    <span className='ml-2 text-sm'>Python</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-orange-400 hover:cursor-pointer">
                    <FaJava className="text-xl" />
                    <span className='ml-2 text-sm'>Java</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-purple-500 hover:cursor-pointer">
                    <FaPhp className="text-xl" />
                    <span className='ml-2 text-sm'>PHP</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-red-500 hover:cursor-pointer">
                    <SiHtml5 className="text-xl" />
                    <span className='ml-2 text-sm'>HTML5</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-orange-600 hover:cursor-pointer">
                    <FaCss3 className="text-xl" />
                    <span className='ml-2 text-sm'>CSS3</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-yellow-500 hover:cursor-pointer">
                    <SiJavascript className="text-xl" />
                    <span className='ml-2 text-sm'>JavaScript</span>
                </div>
            </div>
        ),
    },
    {
        label: "AI/DS",
        value: "ai/ds",
        icon: <GiBrain />,
        desc: (
            <div className="grid grid-cols-3 gap-4 justify-center">
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-orange-600 hover:cursor-pointer">
                    <SiPytorch className="text-xl" />
                    <span className='ml-2 text-sm'>PyTorch</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-gray-500 hover:cursor-pointer">
                    <SiPandas className="text-xl" />
                    <span className='ml-2 text-sm'>Pandas</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-yellow-400 hover:cursor-pointer">
                    <SiScikitlearn className="text-xl" />
                    <span className='ml-2 text-sm'>Scikit-learn</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-red-400 hover:cursor-pointer">
                    <SiStreamlit className="text-xl" />
                    <span className='ml-2 text-sm'>Streamlit</span>
                </div>
                <div className="flex flex-row items-center font-medium text-center border-2 rounded-full h-10 p-2 bg-transparent dark:bg-gray-800 hover:scale-105 hover:text-blue-400 hover:cursor-pointer">
                    <SiTableau className="text-xl" />
                    <span className='ml-2 text-sm'>Tableau</span>
                </div>
            </div>
        ),
    },
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState('frontend');
  
    const handleClick = (value) => {
      setActiveTab(value);
    };
  
    const renderTab = (tab) => (
      <button
        key={tab.value}
        className={`
          px-4 py-2 rounded-t-lg border-b border-gray-200 dark:border-gray-100 font-medium text-sm leading-5 hover:text-gray-900 dark:hover:text-white ${
            activeTab === tab.value ? 'bg-yellow-300 dark:bg-amber-400' : ''
          }`}
        onClick={() => handleClick(tab.value)}
      >
        <div className="flex items-center gap-2">
            {tab.icon}
            <span className='text-base'>{tab.label}</span>
        </div>
        
      </button>
    );
  
    const renderContent = (tab) => (
      <div className={`p-4 rounded-b-lg ${activeTab === tab.value ? 'block' : 'hidden'}`}>
        {tab.desc}
      </div>
    );
  
    return (
        <div className="flex flex-col mb-5 mx-auto items-center justify-center text-center pt-10">
          <h2 className="m-4 text-4xl text-center font-bold hover:underline decoration-yellow-400 decoration-4 underline-offset-8 dark:text-yellow-400">Skills</h2>
      
          <div className="border-2 border-gray-300 p-8 rounded-lg shadow bg-gray-100 dark:bg-gradient-to-t from-yellow-300 to-blue-500 dark:border-2 dark:border-white ">
            <div className="flex flex-wrap overflow-x-auto">
              {data.map(renderTab)}
            </div>
      
            <div className="mt-4">
              {data.map(renderContent)}
            </div>
          </div>
        </div>
    );
  };
  
export default Skills;
