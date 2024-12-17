import React from 'react'
import './css/About.css'
import iconDownload from '../assets/download-minimalistic-svgrepo-com.svg'
import linkedin from '../assets/linkedin-svgrepo-com.svg'
import github from '../assets/github-142-svgrepo-com.svg'

export default function About() {
  const handleDownload = () => {
    const cvLink = document.createElement('a');
    cvLink.href = '/CV_Youness.pdf'; // Chemin vers le fichier dans le dossier public
    cvLink.download = 'CV_Youness.pdf'; // Nom du fichier téléchargé
    cvLink.click();
  };
  return (
    <div className='About'>
      <div>
      <h1>Hey, It's <span>Youness</span></h1>
      <h2>Full-Stack <span>Developer</span></h2>
      <div className='p'>
          <p>I am a full-stack developer passionate about creating modern and high-performance web applications. I am still early in my career and I’m looking to connect with like-minded people and share interests, like you 😄.</p>
      </div>
      <div className='download-socialM'>
      <div className='socialMedia'>
        <a href="https://ma.linkedin.com/in/youness-m-hijane-4ab243261" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt='linkedin'></img>
         </a>    
        <a href="https://github.com/younessMhijane" target="_blank" rel="noopener noreferrer">
        <img src={github} alt='github'></img>
        </a>
      </div>
      <button className="download-button" onClick={handleDownload}>
        CV <img src={iconDownload} alt='iconDownload'></img>
      </button>
      </div>
      </div>
    </div>
  )
}
