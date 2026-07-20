import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getScreenshotUrl, projectsData, type ProjectDetail } from '../../data/projects'
import { HOME_SCROLL_KEY } from '../../pages/Home/scrollRestore'
import BentoCard from '../BentoCard'
import SectionHeader from '../SectionHeader'
import './ProjectsSection.css'

const VISIBLE_COUNT = 3
const PEEK_HEIGHT = 140

function saveScrollPosition() {
  sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY))
}

function ProjectCard({ project, delay, reveal = true }: { project: ProjectDetail; delay: number; reveal?: boolean }) {
  const screenshot = getScreenshotUrl(project)

  return (
    <BentoCard className={`project-card${reveal ? ' reveal' : ''}`} style={{ '--delay': `${delay}ms` } as React.CSSProperties}>
      <Link
        className="project-cover"
        to={`/projetos/${project.slug}`}
        onClick={saveScrollPosition}
        style={{
          background: screenshot
            ? `linear-gradient(180deg, rgba(5, 5, 11, 0) 40%, rgba(5, 5, 11, 0.88) 100%), url(${screenshot}) center/cover`
            : project.cover,
        }}
      >
        <span>{project.status}</span>
      </Link>
      <div className="project-card-body">
        <div>
          <h3>{project.name}</h3>
          <p>{project.tagline}</p>
        </div>
        <div className="badge-list">
          {project.techStack.map((tech) => (
            <span className="badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="button-row">
          <Link className="button" to={`/projetos/${project.slug}`} onClick={saveScrollPosition}>
            Ver detalhes
          </Link>
          <a className="button secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
            Repositório
          </a>
        </div>
      </div>
    </BentoCard>
  )
}

function ProjectsSection() {
  const [showMore, setShowMore] = useState(false)
  const [extraHeight, setExtraHeight] = useState(PEEK_HEIGHT)
  const extraContentRef = useRef<HTMLDivElement>(null)
  const primaryProjects = projectsData.slice(0, VISIBLE_COUNT)
  const extraProjects = projectsData.slice(VISIBLE_COUNT)

  useLayoutEffect(() => {
    if (extraContentRef.current) {
      setExtraHeight(extraContentRef.current.scrollHeight)
    }
  }, [])

  return (
    <section className="page-section" id="projetos">
      <SectionHeader eyebrow="Projetos" title="Projetos em destaque." description="Uma seleção dos projetos que venho construindo." />

      <div className="projects-grid">
        {primaryProjects.map((project, index) => (
          <ProjectCard project={project} delay={index * 80} key={project.slug} />
        ))}
      </div>

      {extraProjects.length > 0 ? (
        <>
          <div
            className={`projects-extra${showMore ? ' is-expanded' : ''}`}
            style={{ maxHeight: showMore ? extraHeight : PEEK_HEIGHT }}
          >
            <div className="projects-grid" ref={extraContentRef}>
              {extraProjects.map((project, index) => (
                <ProjectCard project={project} delay={index * 80} reveal={false} key={project.slug} />
              ))}
            </div>
          </div>

          <div className="projects-more">
            <button type="button" className="button secondary" onClick={() => setShowMore((value) => !value)}>
              {showMore ? 'Ver menos projetos' : 'Ver mais projetos'}
            </button>
          </div>
        </>
      ) : null}
    </section>
  )
}

export default ProjectsSection
