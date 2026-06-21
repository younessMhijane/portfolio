import { FiArrowLeft, FiCheck, FiGithub, FiMonitor } from 'react-icons/fi';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/404" replace />;
  return (
    <section className="project-detail section">
      <div className="container detail-container">
        <Link className="text-link" to="/#projets"><FiArrowLeft /> Retour aux projets</Link>
        <div className="detail-hero">
          <div><p className="eyebrow">{project.category} / {project.status}</p><h1>{project.title}</h1><p>{project.subtitle}</p><div className="tag-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
          <div className={`project-art detail-art accent-${project.accent} ${project.cover ? 'project-art-image' : ''}`}>
            {project.cover ? <img src={project.cover} alt={`Apercu du projet ${project.title}`} /> : <><span>{project.title.slice(0, 2).toUpperCase()}</span><i /><b /></>}
          </div>
        </div>
        <div className="detail-grid"><div><span className="eyebrow">Le contexte</span><h2>Un probleme concret, une reponse claire.</h2><p>{project.problem}</p></div><div><span className="eyebrow">La solution</span><h2>Fonctionnalites principales</h2><ul>{project.features.map((feature) => <li key={feature}><FiCheck /> {feature}</li>)}</ul></div></div>
        <div className="detail-cta"><p>{project.github ? 'Le code source de ce projet est disponible sur GitHub.' : 'Les liens du projet seront affiches ici des qu’ils seront publics.'}</p><div>{project.github ? <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><FiGithub /> Voir le code</a> : <button className="button button-secondary" disabled><FiGithub /> Code prive</button>}<button className="button button-secondary" disabled><FiMonitor /> Demo bientot</button></div></div>
      </div>
    </section>
  );
}
