import { useEffect, useState } from 'react';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { NAV_ITEMS, SITE } from '../../utils/constants';

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a className="brand" href="/#accueil" aria-label="Retour a l'accueil">
          <span className="brand-mark">YM</span>
          <span><strong>{SITE.name}</strong><small>Full-Stack / Multi-stack</small></span>
        </a>

        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`} aria-label="Navigation principale">
          {NAV_ITEMS.map(([label, id]) => (
            <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label={`Activer le theme ${theme === 'dark' ? 'clair' : 'sombre'}`}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a className="nav-cv" href={SITE.cv} download><FiDownload /> CV</a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu" aria-expanded={open}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
