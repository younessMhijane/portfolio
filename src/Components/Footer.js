import React from 'react'
import './css/Footer.css'
import linkedin from '../assets/linkedin-svgrepo-com.svg'
import github from '../assets/github-142-svgrepo-com.svg'
export default function Footer() {
  return (
    <div className='Footer'>
      <div className='socialMedia'>
        <a href="https://ma.linkedin.com/in/youness-m-hijane-4ab243261" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt='linkedin'></img>
         </a>    
        <a href="https://github.com/younessMhijane" target="_blank" rel="noopener noreferrer">
        <img src={github} alt='github'></img>
        </a>
      </div>

        <div className='copyright'>
        <p> © Youness M'hijane | Tous Droits Réservés</p>
        </div>
    </div>
  )
}
