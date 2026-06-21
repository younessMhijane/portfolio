import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiDownload, FiSend } from 'react-icons/fi';
import { SITE } from '../../utils/constants';

const Hero3D = lazy(() => import('../three/Hero3D'));
const mediaQuery = '(min-width: 641px) and (prefers-reduced-motion: no-preference)';

function canUse3D() {
  return typeof window !== 'undefined' && window.matchMedia?.(mediaQuery)?.matches === true;
}

export default function Hero() {
  const [enable3D, setEnable3D] = useState(canUse3D);

  useEffect(() => {
    const query = window.matchMedia?.(mediaQuery);
    if (!query) return undefined;
    const update = () => setEnable3D(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <section className="hero section" id="accueil">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="availability"><span /> Disponible pour de nouvelles opportunites</div>
          <p className="hero-kicker">Bonjour, je suis Youness.</p>
          <h1>Je transforme des idees en <span>produits digitaux utiles.</span></h1>
          <p className="hero-intro">Developpeur Full-Stack, je construis des experiences web et mobiles, des APIs, des solutions e-commerce, CMS et Web3 avec une stack large et adaptable.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projets">Explorer mes projets <FiArrowDownRight /></a>
            <a className="button button-secondary" href="#contact">Parlons de votre projet <FiSend /></a>
            <a className="text-link" href={SITE.cv} download><FiDownload /> Telecharger mon CV</a>
          </div>
          <div className="hero-meta">
            <div><strong>Frontend</strong><span>React / MUI / State</span></div>
            <div><strong>Backend</strong><span>Laravel / Node / Data</span></div>
            <div><strong>Beyond web</strong><span>Flutter / CMS / Web3</span></div>
          </div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          {enable3D ? <Suspense fallback={<div className="canvas-fallback"><span>YOUNESS</span><span>MHIJANE</span></div>}><Hero3D /></Suspense> : <div className="canvas-fallback"><span>YOUNESS</span><span>MHIJANE</span></div>}
          <div className="visual-label label-top">Creative developer</div>
          <div className="visual-label label-bottom">Meknes, Maroc <span /></div>
        </motion.div>
      </div>
      <div className="container tech-marquee"><span>React.js</span><i /> <span>Node.js</span><i /> <span>Flutter</span><i /> <span>WordPress</span><i /> <span>Web3</span><i /> <span>Python</span></div>
    </section>
  );
}
