import { skillGroups } from '../../data/skills';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

export default function Skills() {
  return (
    <section className="section section-dark" id="competences">
      <div className="container">
        <SectionTitle eyebrow="03 / Competences" title="Une stack complete, sans perdre le fil du produit." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal className="skill-card" key={group.title} delay={index * 0.08}>
              <span>{group.index}</span><h3>{group.title}</h3><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
