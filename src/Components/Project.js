import React, { useEffect } from 'react'
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
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Project({ setOpenMoreInfo }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      name: "📝 TodoList & Notes",
      link: "https://github.com/younessMhijane/React-Projet-To-do-list-Note",
      description: "A task management and note-taking application developed with React. This app allows users to organize their daily tasks in a simple and efficient way. With a clean interface, it provides a smooth experience for creating, editing, and deleting tasks and notes.",
      technologies: ["React js", "CSS", "Tailwind CSS"],
      images: [todo1,todo2,todo3,todo4],
    },
    {
      name: "🌦️ Weather App",
      link: "https://github.com/younessMhijane/react-weather",
      description: "A weather application developed with React that allows users to check real-time weather conditions for different cities. With an intuitive interface and detailed information such as temperature, humidity, and forecasts, this app makes it easy to track weather conditions.",
      technologies: ["React js", "CSS", "OpenWeather API"],
      images: [weather1,weather2,weather3,weather4,weather5],
    },
  ];  

  return (
    <div className="Project">
      <h1 data-aos="fade-up">My Projects</h1>
      <div className="Projects">
        {projects.map((project, index) => (
          <div key={index} className="cardPeoject" data-aos="fade-up">
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
