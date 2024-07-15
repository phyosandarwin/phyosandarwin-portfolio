import { React, useEffect, useState } from 'react'
import ScrollToTop from 'react-scroll-to-top'
import {FiSun, FiMoon} from 'react-icons/fi'
import Intro from './components/Intro.jsx'
import Portfolio from './components/Portfolio.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

  const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
	  }, 
  [theme]);

  return (
    <>
    <button type='button' 
            onClick={handleThemeSwitch}
            className='fixed p-3 z-10 right-5 top-4 text-white bg-indigo-800 text-lg rounded-md dark:bg-yellow-300'>
              {theme === 'dark'? <FiSun className='dark:text-black'/>: <FiMoon/>}
            </button>
      <div className='bg-white dark:bg-slate-900 dark:text-white'>
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro/>
          <Portfolio/>
          <Skills />
          <About />
          <Contact/>
          <Footer/>
        </div>
        <ScrollToTop smooth 
        viewBox="0 0 32 54"
        svgPath="M27.707,18.935c-0.391-0.391-1.023-0.391-1.414,0l-10.5,10.5c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0
			L27,21.056l9.793,9.793c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
			L27.707,18.935z" className='rounded-full bg-yellow-300'/>
      </div>
    </>
  )
}

export default App
