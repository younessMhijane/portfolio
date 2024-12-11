import React, { useState } from 'react';
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

export default function Skills() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className='Skills'>
      <h2>Skills</h2>
      <div className='infoSkills'>
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
          </div>
        </div>
      </div>
    </div>
  );
}
