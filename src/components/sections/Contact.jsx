import { useState } from 'react';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMessageCircle, FiSend } from 'react-icons/fi';
import { SITE, whatsappUrl } from '../../utils/constants';
import SectionTitle from '../ui/SectionTitle';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('Envoi en cours...');
    const data = new FormData(event.currentTarget);
    data.append('access_key', process.env.REACT_APP_WEB3FORMS_KEY || 'fe248b2b-8715-414f-95a7-b3a1bc35154b');
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      event.currentTarget.reset();
      setStatus('Merci. Votre message a bien ete envoye.');
    } catch {
      setStatus("L'envoi a echoue. Vous pouvez me contacter directement par email.");
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionTitle eyebrow="07 / Contact" title="Construisons quelque chose d'utile." text="Une application, un site, une idee a clarifier? Ecrivez-moi et parlons du besoin, simplement." />
          <div className="contact-direct">
            <a href={`mailto:${SITE.email}`}><FiMail /><span><small>Email</small>{SITE.email}</span><FiArrowUpRight /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><FiMessageCircle /><span><small>WhatsApp</small>Demarrer une conversation</span><FiArrowUpRight /></a>
          </div>
          <div className="contact-social"><a href={SITE.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href={SITE.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a></div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row"><label>Votre nom<input name="name" type="text" placeholder="Nom complet" required /></label><label>Votre email<input name="email" type="email" placeholder="vous@email.com" required /></label></div>
          <label>Sujet<input name="subject" type="text" placeholder="Application web, mobile, site..." required /></label>
          <label>Parlez-moi de votre projet<textarea name="message" rows="6" placeholder="Votre besoin, vos objectifs, votre delai..." required /></label>
          <div className="form-footer"><span role="status">{status}</span><button className="button button-primary" type="submit">Envoyer le message <FiSend /></button></div>
        </form>
      </div>
    </section>
  );
}
