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
      <h1>Hey, C'est <span>Youness</span></h1>
      <h2>Développeur <span> full stack</span></h2>
      <div className='p'> <p>Je suis développeur full-stack passionné par la création d'applications web modernes et performantes. Je suis encore au début de ma carrière et j'essaie de rencontrer des personnes partageant les mêmes idées et intérêts comme toi 😄.</p></div>
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
