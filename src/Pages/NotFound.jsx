import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return <section className="not-found section"><div><span>404</span><h1>Cette page n'existe pas.</h1><p>Le chemin a peut-etre change, mais le portfolio est toujours juste ici.</p><Link className="button button-primary" to="/"><FiArrowLeft /> Retour a l'accueil</Link></div></section>;
}
