import { services } from '../../data/services';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

export default function Services() {
  return (
    <section className="section section-soft" id="services">
      <div className="container">
        <SectionTitle eyebrow="05 / Services" title="Une execution technique au service de votre idee." text="Pour un lancement, une refonte ou une fonctionnalite precise, j'interviens avec une approche claire et progressive." />
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }, index) => (
            <Reveal className="service-card" key={title} delay={index * 0.05}><div className="service-icon"><Icon /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
