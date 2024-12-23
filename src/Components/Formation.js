import React, { useEffect } from 'react'
import './css/Formation.css'
import bebe from '../assets/16447-removebg-preview.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Formation() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className='Formation'>
        <h2 data-aos="fade-up">Education</h2>
        
        <div className='formationStep' data-aos="fade-up">
        <svg width="600" height="360" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <marker 
            id="arrowhead" 
            markerWidth="10" 
            markerHeight="7" 
            refX="7" 
            refY="3.5" 
            orient="auto"
            >
            <polygon points="0 0, 10 3.5, 0 7" fill="#6a0dad" />
            </marker>
        </defs>

        <path 
            d="M10 250 
            Q 100 100, 200 250 
            T 390 250 
            Q 450 180, 500 250 
            T 590 250" 
            stroke="#6a0dad" 
            strokeWidth="4" 
            strokeDasharray="10, 10" 
            fill="none"
            markerEnd="url(#arrowhead)"
        />
        </svg>
        <div className='child'>
            <p><img src={bebe} alt='bebe'/></p>
            <h3>2002</h3>
        </div>
        <div className='baccalaureate'>
            <h3>2021</h3>
            <p>Baccalaureate in Physical Sciences</p>
        </div>
        <div className='licence'>
        <p>Bachelor's degree in Software Engineering</p>
        <h3>2024</h3>
        </div>
        </div> 



    </div>
  )
}
