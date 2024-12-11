import React, { useState } from 'react'
import './css/Home.css'
import Header from '../Components/Header'
import About from '../Components/About'
import Logo3D from '../Components/Logo3D'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'
import Formation from '../Components/Formation'
export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };
  return (
    <div 
    className='Home' >
        <div className='Home-Header'>
          <Header/>
        </div>
        <div className='Home-About-Logo3D'>
            <div className='Home-About'>
              <About/>
            </div>
            <div className='Home-Logo3D'>
              <Logo3D/>
            </div>
        </div>
        <svg  viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 
                  Q50,100 100,50
                  Q150,0 200,50
                  Q250,100 300,50
                  Q350,0 400,50
                  Q450,100 500,50
                  Q550,0 600,50
                  Q650,150 700,50
                  Q750,0 800,50
                  Q850,100 900,50
                  Q950,0 1000,50
                  Q1050,150 1100,50
                  Q1150,0 1200,50
                  L1200,0 L0,0 Z" 
                fill="#1f1f1f"  />
          </svg>
        <div className='Home-Skills-Formation'>
            <div className='Home-Skills'>
              <Skills/>
            </div>
            <div className='Home-Formation'>
              <Formation/>
            </div>
        </div>
        <svg  viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 
                  Q50,100 100,50
                  Q150,0 200,50
                  Q250,100 300,50
                  Q350,0 400,50
                  Q450,100 500,50
                  Q550,0 600,50
                  Q650,150 700,50
                  Q750,0 800,50
                  Q850,100 900,50
                  Q950,0 1000,50
                  Q1050,150 1100,50
                  Q1150,0 1200,50
                  L1200,200 L0,100 Z" 
                fill="#1f1f1f"  />
          </svg>
        <div className='Home-Project'>
        <Project setOpenMoreInfo={setSelectedProject} />
        </div>
        <div className='Home-Contact'>
          <Contact/>
          </div>
        <div className='Home-Footer'>
          <svg  viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 
                  Q50,100 100,50
                  Q150,0 200,50
                  Q250,100 300,50
                  Q350,0 400,50
                  Q450,100 500,50
                  Q550,0 600,50
                  Q650,100 700,50
                  Q750,0 800,50
                  Q850,100 900,50
                  Q950,0 1000,50
                  Q1050,100 1100,50
                  Q1150,0 1200,50
                  L1200,0 L0,0 Z" 
                fill="#1f1f1f"  />
          </svg>
          <Footer/>
          </div>
          {selectedProject &&
          <div className='moreInfo'>
            <div className='divMoreInfo'>
              <button onClick={()=>setSelectedProject(null)}>Fermer</button>

              <div className="moreInfo-content">
                <h2>Nom Projet: <span>{selectedProject.name}</span> </h2>
                <div className="image-slider">
              <button className="arrow left-arrow" onClick={showPrevImage}>
                &#9664;
              </button>

              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="project-image"
              />

              <button className="arrow right-arrow" onClick={showNextImage}>
                &#9654;
              </button>
            </div>

                <p>Description:<span> {selectedProject.description}</span></p>
                <div>
                  <p>Technologies :
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index}>{tech}, </span>
                    ))}
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          }
    </div>
  )
}
