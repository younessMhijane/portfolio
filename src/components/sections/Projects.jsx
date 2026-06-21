import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { projectFilters, projects } from '../../data/projects';
import SectionTitle from '../ui/SectionTitle';

export default function Projects() {
  const [filter, setFilter] = useState('Tous');
  const visible = filter === 'Tous' ? projects : projects.filter((project) => project.tags.includes(filter));

  return (
    <section className="section" id="projets">
      <div className="container">
        <div className="projects-head">
          <SectionTitle eyebrow="04 / Projets" title="Du besoin concret au produit qui fonctionne." text="Une selection de produits web, mobiles et WordPress, chacun pense pour un usage precis." />
          <div className="filters" aria-label="Filtrer les projets">
            {projectFilters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}
          </div>
        </div>
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} className={`project-card accent-${project.accent}`} key={project.slug}>
                <div className="project-top"><span>{project.number}</span><span className="project-status">{project.status}</span></div>
                <div className={`project-art ${project.cover ? 'project-art-image' : ''}`} aria-hidden="true">
                  {project.cover ? <img src={project.cover} alt="" /> : <><span>{project.title.slice(0, 2).toUpperCase()}</span><i /><b /></>}
                </div>
                <div className="project-body"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.stack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div></div>
                <Link className="project-link" to={`/projets/${project.slug}`}>Voir le projet <FiArrowUpRight /></Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
