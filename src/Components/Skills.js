import { useState,useEffect } from 'react';
import './css/Skills.css';
import photoProfil from '../assets/photoProfil.jpg';
import react from '../assets/iconsLangageFrameworks/react-2.svg';
import java from '../assets/iconsLangageFrameworks/java-4.svg';
import css from '../assets/iconsLangageFrameworks/css-3.svg';
import html from '../assets/iconsLangageFrameworks/html-1.svg';
import JS from '../assets/iconsLangageFrameworks/javascript-1.svg';
import php from '../assets/iconsLangageFrameworks/new-php-logo.png';
import python from '../assets/iconsLangageFrameworks/python-5.svg';
import tailwindCss from '../assets/iconsLangageFrameworks/tailwindcss.svg';
import mongoDb from '../assets/iconsLangageFrameworks/mongodb-svgrepo-com.svg';
import nodejs from '../assets/iconsLangageFrameworks/node-js-svgrepo-com.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Skills() {
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='Skills'>
      <h2 data-aos="fade-up">Skills</h2>
      <div className='infoSkills' data-aos="fade-up">
        <div className='profileContainer'>
          <img src={photoProfil} alt='profil' />
          <div
            className={`rotatingIcons ${isPaused ? 'paused' : ''}`}
          >
            <img
              src={html}
              className='icon html'
              alt='HTML'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
            <img
              src={css}
              className='icon css'
              alt='CSS'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
            <img
              src={JS}
              className='icon js'
              alt='JavaScript'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
            <img
              src={react}
              className='icon react'
              alt='React'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
            <img
              src={php}
              className='icon php'
              alt='PHP'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
            <img
              src={java}
              className='icon java'
              alt='Java'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
            <img
              src={python}
              className='icon python'
              alt='Python'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
            <img
              src={tailwindCss}
              className='icon tailwindcss'
              alt='Tailwind CSS'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
            <img
              src={mongoDb}
              className='icon mongodb'
              alt='Tailwind CSS'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
            <img
              src={nodejs}
              className='icon nodejs'
              alt='Tailwind CSS'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
