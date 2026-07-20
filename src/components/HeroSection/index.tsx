import { useState } from 'react'
import { heroBadges, profile, quickStats } from '../../data/portfolio'
import BentoCard from '../BentoCard'
import './HeroSection.css'

function HeroSection() {
  const [avatarFailed, setAvatarFailed] = useState(false)
  return (
    <section className="hero-section page-section" id="inicio">
      <BentoCard className="hero-content reveal" accent>
        <span className="eyebrow">Disponível para novos projetos</span>
        <div className="hero-title-group">
          <h1>
            Olá, eu sou <span className="gradient-text">{profile.name}</span>
          </h1>
          <strong>
            Desenvolvedor <span>Full Stack</span>
          </strong>
          <p>{profile.summary}</p>
        </div>
        <div className="button-row hero-actions">
          <a className="button" href="#projetos">
            Ver Projetos <span>→</span>
          </a>
          <a className="button secondary" href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div className="badge-list" aria-label="Tecnologias principais">
          {heroBadges.map((badge) => (
            <span className="badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>
      </BentoCard>

      <div className="hero-visual reveal" style={{ '--delay': '120ms' } as React.CSSProperties}>
        <BentoCard className="profile-card">
          <div className="photo-frame" aria-label="Foto de perfil">
            <div className="photo-avatar-ring">
              {avatarFailed ? (
                <div className="photo-placeholder">
                  <span>{profile.name.charAt(0)}</span>
                </div>
              ) : (
                <img
                  className="photo-avatar"
                  src={profile.avatarUrl}
                  alt={profile.name}
                  onError={() => setAvatarFailed(true)}
                />
              )}
            </div>
          </div>
          <div className="profile-meta">
            <span>Brasil · Remoto</span>
            <span className="online-dot">Online</span>
          </div>
        </BentoCard>
        <div className="quick-stats">
          {quickStats.map((item) => (
            <BentoCard className="quick-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
