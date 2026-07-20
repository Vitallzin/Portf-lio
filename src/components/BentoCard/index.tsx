import type { CSSProperties, ReactNode } from 'react'
import './BentoCard.css'

type BentoCardProps = {
  children: ReactNode
  className?: string
  accent?: boolean
  style?: CSSProperties
}

function BentoCard({ children, className = '', accent = false, style }: BentoCardProps) {
  return (
    <article className={`bento-card ${accent ? 'bento-card-accent' : ''} ${className}`} style={style}>
      {children}
    </article>
  )
}

export default BentoCard
