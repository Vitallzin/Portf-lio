import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getDemoUrl, getScreenshotUrl, getSiteDomain, projectsData } from '../../data/projects'
import './ProjectDetail.css'

const EXIT_DURATION = 260

function SitePreviewImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    setFailed(false)
    setAttempt(0)
  }, [src])

  useEffect(() => {
    if (attempt === 0) {
      const timer = setTimeout(() => setAttempt(1), 4000)
      return () => clearTimeout(timer)
    }
  }, [attempt])

  if (failed) {
    return <div className="site-preview-empty">Prévia do site em breve</div>
  }

  return (
    <img
      className="site-preview-image"
      src={attempt > 0 ? `${src}${src.includes('?') ? '&' : '?'}retry=${attempt}` : src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find((item) => item.slug === slug)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    setIsLeaving(false)
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const demoUrl = getDemoUrl(project)

  function handleBack(event: React.MouseEvent) {
    event.preventDefault()
    setIsLeaving(true)
    window.setTimeout(() => navigate('/'), EXIT_DURATION)
  }

  return (
    <main className={`project-detail${isLeaving ? ' project-detail-leaving' : ''}`}>
      <div className="project-detail-header">
        <a className="project-detail-back" href="/" onClick={handleBack}>
          ← Voltar aos projetos
        </a>
        <span className="eyebrow project-detail-eyebrow">{project.status}</span>
        <h1 className="project-detail-title">
          <span className="gradient-text">{project.name}</span>
        </h1>
        <p className="project-detail-tagline">{project.tagline}</p>
      </div>

      <div className="project-detail-body">
        <section className="project-detail-main">
          {demoUrl ? (
            <div className="site-preview">
              <a className="site-preview-frame" href={demoUrl} target="_blank" rel="noreferrer">
                <div className="site-preview-chrome">
                  <span className="site-preview-dot" />
                  <span className="site-preview-dot" />
                  <span className="site-preview-dot" />
                  <span className="site-preview-url">{getSiteDomain(demoUrl)}</span>
                </div>
                {getScreenshotUrl(project) ? (
                  <SitePreviewImage src={getScreenshotUrl(project)!} alt={`Captura de tela do site ${project.name}`} />
                ) : (
                  <div className="site-preview-empty">Prévia do site em breve</div>
                )}
              </a>
              <a className="site-preview-domain" href={demoUrl} target="_blank" rel="noreferrer">
                <span className="site-preview-status" />
                {getSiteDomain(demoUrl)}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          ) : null}

          <h2>Sobre o projeto</h2>
          <p>{project.description}</p>

          <h2>Destaques</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <aside className="project-detail-side">
          <div className="project-detail-tag-group">
            <h3>Tecnologias</h3>
            <div className="badge-list">
              {project.techStack.map((tech) => (
                <span className="badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-detail-tag-group">
            <h3>Ferramentas</h3>
            <div className="badge-list">
              {project.tools.map((tool) => (
                <span className="badge" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="button-row project-detail-actions">
            {demoUrl ? (
              <a className="button" href={demoUrl} target="_blank" rel="noreferrer">
                Ver demonstração
              </a>
            ) : null}
            <a className="button secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
              Ver repositório
            </a>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default ProjectDetail
