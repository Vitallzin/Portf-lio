import { softSkills } from '../../data/portfolio'
import BentoCard from '../BentoCard'
import SectionHeader from '../SectionHeader'
import './SoftSkillsSection.css'

function SoftSkillsSection() {
  return (
    <section className="page-section" id="competencias">
      <SectionHeader
        eyebrow="Competências"
        title="Postura profissional além do código."
        description="Cards objetivos para mostrar como você pensa, colabora e evolui dentro de projetos."
      />
      <div className="bento-grid soft-skills-grid">
        {softSkills.map((skill, index) => (
          <BentoCard className="span-4 soft-skill-card reveal" key={skill.title} style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}>
            <span className="icon-token">{String(index + 1).padStart(2, '0')}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}

export default SoftSkillsSection
