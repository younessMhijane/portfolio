import {  useEffect } from "react";
import "./css/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Profil
import photoProfil from "../assets/photoProfil.jpg";

// Icônes
import react from "../assets/iconsLangageFrameworks/react-2.svg";
import java from "../assets/iconsLangageFrameworks/java-4.svg";
import cssIcon from "../assets/iconsLangageFrameworks/css-3.svg";
import html from "../assets/iconsLangageFrameworks/html-1.svg";
import JS from "../assets/iconsLangageFrameworks/javascript-1.svg";
import php from "../assets/iconsLangageFrameworks/new-php-logo.png";
import python from "../assets/iconsLangageFrameworks/python-5.svg";
import tailwindCss from "../assets/iconsLangageFrameworks/tailwindcss.svg";
import mongoDb from "../assets/iconsLangageFrameworks/mongodb-svgrepo-com.svg";
import nodejs from "../assets/iconsLangageFrameworks/node-js-svgrepo-com.svg";

export default function Skills() {
  const icons = [
    html,
    cssIcon,
    JS,
    react,
    php,
    java,
    python,
    tailwindCss,
    mongoDb,
    nodejs,
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="Skills">
      <h2 data-aos="fade-up">Skills</h2>

      <div className="infoSkills" data-aos="fade-up">
        <div className="circleWrapper">

          {/* Photo */}
          <div className="profileWrapper">
            <img src={photoProfil} alt="profil" />
          </div>

          {/* Icônes en cercle */}
          <div className="iconsCircle">
            {icons.map((icon, i) => (
              <div
                key={i}
                className="iconContainer"
                style={{
                  transform: `rotate(${(360 / icons.length) * i}deg) translate(180px) rotate(-${(360 / icons.length) * i}deg)`
                }}
              >
                <img src={icon} className="icon" alt="skill" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
