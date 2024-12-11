import React, { useState, useEffect } from 'react';
import Wave from 'react-wavify';
import './css/intro.css';
import Home from './Home';
import songIntro from '../assets/shine-11-268907.mp3';

const Intro = () => {
  const [fullHeightInto, setFullHeightInto] = useState(130);
  const [endIntro, setEndIntro] = useState(true);
  const [audio] = useState(new Audio(songIntro));

  useEffect(() => {
    let timer;
    if (fullHeightInto > 0) {
      timer = setTimeout(() => {
        setFullHeightInto(fullHeightInto - 1);
      }, 100);
    } else {
      setEndIntro(true);
      if(audio){
        audio.play().catch(error => console.error('Audio playback error:', error));
      }

    }
    return () => clearTimeout(timer);
  }, [fullHeightInto,audio]);



  return (
    <>
      {!endIntro ? (
        <div className='Intro'>
          {fullHeightInto > 90 ? (
            <svg
              className='logoInit'
              width="82"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5 L5 70 L18 70 L18 5 Z" fill="none" />
              <path d="M20 6 L20 50 L32 70 L32 95 L48 95 L48 70 L60 50 L60 6 L40 62 Z" fill="none" />
              <path d="M62 5 L62 70 L77 70 L77 5 Z" fill="none" />
            </svg>
          ) : (
            <div style={{ position: 'relative', width: '82px', height: '100px', overflow: 'hidden' }}>
              <svg
                className='logo'
                width="82"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask id="wave-mask">
                    <rect width="100%" height="100%" fill="white" />
                    <path d="M5 5 L5 70 L18 70 L18 5 Z" fill="black" />
                    <path d="M20 6 L20 50 L32 70 L32 95 L48 95 L48 70 L60 50 L60 6 L40 62 Z" fill="black" />
                    <path d="M62 5 L62 70 L77 70 L77 5 Z" fill="black" />
                  </mask>
                </defs>
                <rect width="100%" height="100%" fill="#1f1f1f" mask="url(#wave-mask)" />
              </svg>
              <Wave className='wave'
                fill="#6A0DAD"
                paused={false}
                options={{
                  height: fullHeightInto,
                  amplitude: 4,
                  speed: 0.3,
                  points: 6,
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <>
          <Home />
        </>
      )}
    </>
  );
};

export default Intro;
