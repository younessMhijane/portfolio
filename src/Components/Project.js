import React from 'react'
import './css/Project.css'
import folder from '../assets/folder-svgrepo-com.svg'
import todo1 from '../assets/todo/todo1.png'
import todo2 from '../assets/todo/todo2.png'
import todo3 from '../assets/todo/todo3.png'
import todo4 from '../assets/todo/todo4.png'
import weather1 from '../assets/weather/weather1.png'
import weather2 from '../assets/weather/weather2.png'
import weather3 from '../assets/weather/weather3.png'
import weather4 from '../assets/weather/weather4.png'
import weather5 from '../assets/weather/weather5.png'
export default function Project({ setOpenMoreInfo }) {
  const projects = [
    {
      name: "📝 TodoList & Notes",
      link: "https://github.com/younessMhijane/React-Projet-To-do-list-Note",
      description: "Une application de gestion de tâches et de prise de notes développée avec React. Cette application permet aux utilisateurs d'organiser leur quotidien de manière simple et efficace. Grâce à une interface épurée, elle offre une expérience fluide pour la création, l'édition et la suppression des tâches et des notes.",
      technologies: ["React js", "CSS", "tailwind css"],
      images: [todo1,todo2,todo3,todo4],
    },
    {
      name: "🌦️ Weather App",
      link: "https://github.com/younessMhijane/react-weather",
      description: "Une application météo développée avec React qui permet de consulter les conditions météorologiques en temps réel pour différentes villes. Grâce à une interface intuitive et des informations détaillées telles que la température, l'humidité et les prévisions, cette application facilite le suivi des conditions climatiques.",
      technologies: ["React js", "CSS", "OpenWeather API"],
      images: [weather1,weather2,weather3,weather4,weather5],
    },
  ];

  return (
    <div className="Project">
      <h1>Mes Projets</h1>
      <div className="Projects">
        {projects.map((project, index) => (
          <div key={index} className="cardPeoject">
            <div className="NamProject">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={folder} alt={`${project.name} Icon`} />
                <p>{project.name}</p>
              </a>
            </div>
            <button onClick={() => setOpenMoreInfo(project)}>
              <div className="imgs">
                <img src={project.images[0]} alt="imageOne" />
              </div>
            </button>

            <div className="description">
            <p>{project.description.substring(0, 30)}...</p>
            </div>
            <div className="logiciel">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
