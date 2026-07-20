import { profile } from '../../data/portfolio'
import './Navbar.css'

const navItems = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'GitHub', href: '#github' },
  { label: 'Tech', href: '#tecnologias' },
  { label: 'Certificados', href: '#certificados' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

function Navbar() {
  return (
    <header className="site-nav">
      <a className="brand-pill" href="#inicio" aria-label="Voltar ao início">
        <span />
        devportfolio
      </a>
      <nav className="nav-pill" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-contact" href={`mailto:${profile.email}`}>
        Contato <span>→</span>
      </a>
    </header>
  )
}

export default Navbar
