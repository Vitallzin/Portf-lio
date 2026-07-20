import { profile } from '../../data/portfolio'
import BentoCard from '../BentoCard'
import './ContactSection.css'

function ContactSection() {
  return (
    <section className="page-section contact-section" id="contato">
      <BentoCard className="contact-card reveal" accent>
        <div className="contact-copy">
          <span className="eyebrow">Contato</span>
          <h2>Vamos construir algo bem feito?</h2>
          <p>
            Se você procura alguém organizado, cuidadoso com interface e interessado em criar soluções completas, esse é o melhor caminho para conversar.
          </p>
          <div className="button-row">
            <a className="button" href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button secondary" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button secondary" href={`mailto:${profile.email}`}>
              E-mail
            </a>
            <a className="button secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Currículo
            </a>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Nome
            <input type="text" name="name" placeholder="Seu nome" />
          </label>
          <label>
            E-mail
            <input type="email" name="email" placeholder="seu@email.com" />
          </label>
          <label>
            Assunto
            <input type="text" name="subject" placeholder="Projeto, vaga ou parceria" />
          </label>
          <label>
            Mensagem
            <textarea name="message" placeholder="Conte um pouco sobre o que você precisa" rows={5} />
          </label>
          <button className="button" type="submit">
            Enviar mensagem
          </button>
        </form>
      </BentoCard>
    </section>
  )
}

export default ContactSection
