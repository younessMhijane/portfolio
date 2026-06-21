import { experiences } from '../../data/experiences';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle eyebrow="02 / Experience" title="Des experiences qui relient code et terrain." text="Chaque mission a renforce ma facon de livrer: comprendre vite, structurer proprement et avancer avec pragmatisme." />
        <div className="timeline">
          {experiences.map((item, index) => (
            <Reveal className={`timeline-item ${item.featured ? 'timeline-featured' : ''}`} key={item.title} delay={index * 0.08}>
              <div className="timeline-period"><span>{String(index + 1).padStart(2, '0')}</span>{item.period}</div>
              <div className="timeline-content"><p className="company">{item.company}</p><h3>{item.title}</h3><p>{item.description}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
              <div className="tag-list">{item.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
