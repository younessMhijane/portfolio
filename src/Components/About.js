import React from 'react';
import './css/About.css';
import iconDownload from '../assets/download-minimalistic-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import github from '../assets/github-142-svgrepo-com.svg';
import posthog from 'posthog-js';

export default function About() {
  const handleDownload = () => {
    // 🔥 Track PostHog
    posthog.capture('cv_downloaded');

    // Download logic
    const cvLink = document.createElement('a');
    cvLink.href = '/CV_Youness.pdf';
    cvLink.download = 'CV_Youness.pdf';
    cvLink.click();
  };

  const handleLinkedInClick = () => {
    posthog.capture('linkedin_clicked');
  };

  const handleGithubClick = () => {
    posthog.capture('github_clicked');
  };

  return (
    <div className="About">
      <div>
        <h1>Hey, It's <span className="underline1">Youness</span></h1>
        <h2>Full-Stack <span className="underline1">Developer</span></h2>
        <div className="p">
          <p>
            I am a full-stack developer passionate about creating modern and high-performance web applications.
            I am still early in my career and I’m looking to connect with like-minded people and share interests, like you 😄.
          </p>
        </div>
        <div className="download-socialM">
          <div className="socialMedia">
            <a
              href="https://ma.linkedin.com/in/youness-m-hijane-4ab243261"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper"
              onClick={handleLinkedInClick}
            >
              <img src={linkedin} alt="linkedin" />
              <span className="pulse-ring"></span>
            </a>

            <a
              href="https://github.com/younessMhijane"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper"
              onClick={handleGithubClick}
            >
              <img src={github} alt="github" />
              <span className="pulse-ring"></span>
            </a>
          </div>

          <button className="download-button" onClick={handleDownload}>
            CV <img src={iconDownload} alt="iconDownload" />
          </button>
        </div>
      </div>
    </div>
  );
}
