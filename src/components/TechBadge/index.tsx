import { getTechIcon, getTechImage } from '../../data/techIcons'

function TechBadge({ name }: { name: string }) {
  const Icon = getTechIcon(name)
  const image = getTechImage(name)

  return (
    <span className="badge">
      {Icon ? <Icon className="badge-icon" aria-hidden="true" /> : null}
      {!Icon && image ? <img className="badge-icon" src={image} alt="" loading="lazy" /> : null}
      {name}
    </span>
  )
}

export default TechBadge
