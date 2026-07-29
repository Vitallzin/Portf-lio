import { techCategories } from '../../data/portfolio'
import { getTechIcon, getTechImage } from '../../data/techIcons'
import BentoCard from '../BentoCard'
import SectionHeader from '../SectionHeader'
import './TechSection.css'

function getInitials(value: string) {
  return value
    .split(/[\s.-]+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TechSection() {
  return (
    <section className="page-section" id="tecnologias">
      <SectionHeader
        eyebrow="Stack técnica"
        title="Tecnologias"
        description="Ferramentas com as quais construo produtos completos, do banco de dados à interface."
      />
      <div className="bento-grid tech-grid">
        {techCategories.map((category, index) => (
          <BentoCard
            className="span-4 reveal tech-card"
            key={category.title}
            style={{ '--delay': `${index * 60}ms` } as React.CSSProperties}
          >
            <h3>{category.title}</h3>
            <div className="tech-list">
              {category.items.map((item) => {
                const Icon = getTechIcon(item)
                const image = getTechImage(item)
                const hasVisual = Boolean(Icon || image)

                return (
                  <span className="tech-badge" key={item}>
                    <span className={`icon-token${hasVisual ? ' icon-token-logo' : ''}`}>
                      {Icon ? (
                        <Icon className="icon-token-img" aria-hidden="true" />
                      ) : image ? (
                        <img className="icon-token-img" src={image} alt="" loading="lazy" />
                      ) : (
                        getInitials(item)
                      )}
                    </span>
                    {item}
                  </span>
                )
              })}
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}

export default TechSection
