import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import profilePhoto from '../../assets/photoProfil.jpg';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

const disciplines = [
  ['Full-Stack', 'React, Laravel, Node/Express, bases SQL et NoSQL pour construire le produit complet.'],
  ['Mobile', 'Applications Flutter et FlutterFlow connectees a Firebase, APIs et services de paiement.'],
  ['CMS, commerce & Web3', 'WordPress, Shopify, WooCommerce et dApps avec Solidity, ethers.js et IPFS.'],
];

export default function About() {
  return (
    <section className="section section-soft" id="a-propos">
      <div className="container">
        <SectionTitle eyebrow="01 / A propos" title="Comprendre le besoin. Concevoir avec clarte." />
        <div className="about-layout">
          <Reveal className="portrait-card">
            <img src={profilePhoto} alt="Portrait professionnel de Youness M'hijane" />
            <div className="portrait-caption"><span /><div><small>Actuellement</small><strong>Full-Stack chez YoNetwork</strong></div></div>
            <span className="portrait-index">YM / 2026</span>
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-lead">
              <p className="large-copy">Je ne developpe pas seulement des ecrans. Je construis des solutions qui doivent etre <em>comprises, utilisees et maintenues.</em></p>
              <p>Mon profil relie frontend, backend, mobile, CMS et Web3. Cette polyvalence me permet de suivre un produit dans son ensemble, de l'idee jusqu'a une version exploitable.</p>
              <a className="text-link" href="#contact">Decouvrir comment je travaille <FiArrowUpRight /></a>
            </Reveal>
            <div className="discipline-list">
              {disciplines.map(([title, text], index) => (
                <Reveal className="discipline-card" key={title} delay={index * 0.08}>
                  <span className="discipline-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><FiCheck />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>09+</strong><span>Projets presentes</span></div>
          <div><strong>03</strong><span>Experiences techniques</span></div>
          <div><strong>2024</strong><span>Licence en genie logiciel</span></div>
          <div><strong>AR · FR · EN</strong><span>Langues de travail</span></div>
        </div>
      </div>
    </section>
  );
}
