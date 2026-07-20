import { useEffect, useRef } from 'react'
import SectionHeader from '../SectionHeader'
import BentoCard from '../BentoCard'
import { giscusConfig, isGiscusConfigured } from './giscusConfig'
import './CommentsSection.css'

function GiscusWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-repo', giscusConfig.repo)
    script.setAttribute('data-repo-id', giscusConfig.repoId)
    script.setAttribute('data-category', giscusConfig.category)
    script.setAttribute('data-category-id', giscusConfig.categoryId)
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'noborder_dark')
    script.setAttribute('data-lang', 'pt')

    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return <div className="giscus-container" ref={containerRef} />
}

function CommentsSection() {
  return (
    <section className="page-section" id="comentarios">
      <SectionHeader eyebrow="Comentários" title="Deixe seu recado." description="Feedback, sugestões ou só um oi — fique à vontade." />
      <BentoCard className="comments-card reveal">
        {isGiscusConfigured ? (
          <GiscusWidget />
        ) : (
          <p className="comments-pending">
            Espaço reservado — configure o giscus em{' '}
            <a href="https://giscus.app" target="_blank" rel="noreferrer">
              giscus.app
            </a>{' '}
            para ativar os comentários aqui.
          </p>
        )}
      </BentoCard>
    </section>
  )
}

export default CommentsSection
