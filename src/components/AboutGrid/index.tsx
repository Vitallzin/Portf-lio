import { educationItems, experienceItems } from '../../data/portfolio'
import BentoCard from '../BentoCard'
import './AboutGrid.css'

function AboutGrid() {
  return (
    <section className="page-section" id="sobre">
      <div className="bento-grid about-grid">
        <BentoCard className="span-6 reveal about-card education-card" style={{ '--delay': '120ms' } as React.CSSProperties}>
          <h3>Formação Acadêmica</h3>
          <div className="mini-timeline">
            {educationItems.map((item) => (
              <div className="mini-timeline-item" key={item.title}>
                <span>{item.period}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>
        <BentoCard className="span-6 reveal about-card experience-card" style={{ '--delay': '160ms' } as React.CSSProperties}>
          <h3>Experiência</h3>
          <div className="mini-timeline">
            {experienceItems.map((item) => (
              <div className="mini-timeline-item" key={item.title}>
                <span>{item.period}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  )
}

export default AboutGrid
