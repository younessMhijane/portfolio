import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { NAV_ITEMS, SITE } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="/#accueil"><span className="brand-mark">YM</span><strong>{SITE.name}</strong></a>
          <p>Des produits digitaux utiles, propres et construits avec attention.</p>
        </div>
        <div className="footer-links">
          {NAV_ITEMS.slice(0, 6).map(([label, id]) => <a key={id} href={`/#${id}`}>{label}</a>)}
        </div>
        <div className="social-links">
          <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${SITE.email}`} aria-label="Email"><FiMail /></a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {SITE.name}</span><span>Developpe avec React & Three.js</span></div>
    </footer>
  );
}
