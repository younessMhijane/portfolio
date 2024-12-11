import React from 'react'
// import {useState,useEffect} from 'react'
import './css/Header.css'
// import darkMode from '../assets/DarkMode.png'
// import lightMode from '../assets/lightmode.png'

export default function Header() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const darkMode = localStorage.getItem('darkMode') === 'enabled';
  //   setIsDarkMode(darkMode);
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   }
  // }, []);

  // const toggleDarkMode = () => {
  //   const darkMode = !isDarkMode;
  //   setIsDarkMode(darkMode);
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('darkMode', 'enabled');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('darkMode', 'disabled');
  //   }
  // };
  return (
    <div className='Header'>
      <div className='d1'>
      <svg
        className='Header-logo'
        width="30"
        height="30"
        viewBox="0 0 82 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 5 L5 70 L18 70 L18 5 Z" fill="#6A0DAD" />
        <path d="M20 6 L20 50 L32 70 L32 95 L48 95 L48 70 L60 50 L60 6 L40 62 Z" fill="#6A0DAD" />
        <path d="M62 5 L62 70 L77 70 L77 5 Z" fill="#6A0DAD" />
      </svg>
      <h4>Youness M'hijane</h4>
            </div>
      <div className='d2'>

      </div>
      <div className='d3'>
      {/* <button
      onClick={toggleDarkMode}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded"
      style={{ padding: '0',backgroundColor:'transparent'}}>
        {isDarkMode ? 
          <img src={darkMode} style={{ padding:'2px',border:'2px solid gray', borderRadius:'50%', width:'35px', backgroundColor:'white'}} alt='darkmode'></img> 
          : 
          <img src={lightMode} style={{border:'2px solid gray', borderRadius:'50%', width:'35px', backgroundColor:'black'}} alt='darkmode'></img> 
        }
    </button> */}
      </div>
      <div className='d4'>
      
      </div>

      </div>
  )
}
