import './SectionHeader.css'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="section-header reveal">
      <span className="eyebrow">{eyebrow}</span>
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  )
}

export default SectionHeader
