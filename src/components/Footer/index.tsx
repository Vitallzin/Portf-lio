import { profile } from '../../data/portfolio'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <span>{profile.name} © 2026</span>
      <nav aria-label="Redes sociais">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>E-mail</a>
      </nav>
    </footer>
  )
}

export default Footer
