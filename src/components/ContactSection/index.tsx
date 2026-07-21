import { useState } from 'react'
import { profile } from '../../data/portfolio'
import BentoCard from '../BentoCard'
import { isWeb3FormsConfigured, WEB3FORMS_ACCESS_KEY } from './web3formsConfig'
import './ContactSection.css'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isWeb3FormsConfigured) {
      setStatus('error')
      return
    }

    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" className="contact-form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label>
            Nome
            <input type="text" name="name" placeholder="Seu nome" required />
          </label>
          <label>
            E-mail
            <input type="email" name="email" placeholder="seu@email.com" required />
          </label>
          <label>
            Assunto
            <input type="text" name="subject" placeholder="Projeto, vaga ou parceria" />
          </label>
          <label>
            Mensagem
            <textarea name="message" placeholder="Conte um pouco sobre o que você precisa" rows={5} required />
          </label>
          <button className="button" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
          </button>
          {status === 'success' ? <p className="contact-form-feedback success">Mensagem enviada! Retorno em breve.</p> : null}
          {status === 'error' ? (
            <p className="contact-form-feedback error">Não foi possível enviar agora. Tente pelo e-mail direto ali em cima.</p>
          ) : null}
        </form>
      </BentoCard>
    </section>
  )
}

export default ContactSection
