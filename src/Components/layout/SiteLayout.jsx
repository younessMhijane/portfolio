import { FiArrowUp, FiMessageCircle } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { whatsappUrl } from '../../utils/constants';
import Footer from './Footer';
import Navbar from './Navbar';

export default function SiteLayout() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main><Outlet /></main>
      <Footer />
      <div className="floating-actions">
        <a className="floating-button whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contacter sur WhatsApp"><FiMessageCircle /></a>
        <button className="floating-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Retour en haut"><FiArrowUp /></button>
      </div>
    </>
  );
}
