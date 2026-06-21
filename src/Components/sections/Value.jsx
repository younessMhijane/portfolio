import { FiCode, FiCompass, FiRefreshCw, FiShuffle } from 'react-icons/fi';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

const values = [
  [FiCode, 'Code propre', 'Des composants reutilisables, une logique lisible et une base qui reste facile a faire evoluer.'],
  [FiCompass, 'Vision produit', 'Je relie les decisions techniques aux usages, aux objectifs et a la valeur attendue.'],
  [FiShuffle, 'Polyvalence', 'Un regard transversal sur le frontend, le backend, le mobile et les outils de contenu.'],
  [FiRefreshCw, 'Amelioration continue', 'Mesurer, corriger, simplifier et enrichir le produit par iterations utiles.'],
];

export default function Value() {
  return (
    <section className="section value-section">
      <div className="container value-grid">
        <SectionTitle eyebrow="06 / Ma valeur" title="Ce que j'apporte a votre projet." />
        <div className="value-list">
          {values.map(([Icon, title, text], index) => <Reveal className="value-row" key={title} delay={index * 0.06}><span>0{index + 1}</span><Icon /><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}
