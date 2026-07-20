import { githubUsername, profile } from '../../data/portfolio'
import { useGithubStats } from '../../hooks/useGithubStats'
import BentoCard from '../BentoCard'
import './GithubSection.css'

function GithubSection() {
  const { status, data } = useGithubStats(githubUsername)

  const languagesText =
    status === 'ready' && data && data.languages.length > 0 ? data.languages.slice(0, 4).join(' / ') : 'Carregando…'

  const statsText = status === 'ready' && data ? `${data.user.public_repos} repositórios` : 'Carregando…'

  return (
    <section className="page-section" id="github">
      <div className="bento-grid github-grid">
        <BentoCard className="span-6 contribution-card reveal github-card">
          <span>Contribuições</span>
          <img
            className="contribution-graph-img"
            src={`https://ghchart.rshah.org/9d4dff/${githubUsername}`}
            alt={`Gráfico de contribuições de ${githubUsername} no GitHub`}
            loading="lazy"
          />
          <p>Calendário de commits ao vivo, direto do perfil público.</p>
        </BentoCard>

        <BentoCard className="span-3 reveal github-card" style={{ '--delay': '70ms' } as React.CSSProperties}>
          <span>Linguagens</span>
          <strong>{languagesText}</strong>
          <p>Linguagens mais usadas nos repositórios públicos.</p>
        </BentoCard>

        <BentoCard className="span-3 reveal github-card" style={{ '--delay': '140ms' } as React.CSSProperties}>
          <span>Estatísticas</span>
          <strong>{statsText}</strong>
          <p>{status === 'ready' && data ? `${data.user.followers} seguidores` : 'Perfil ativo no GitHub.'}</p>
        </BentoCard>

        <BentoCard className="span-12 github-cta reveal">
          <div>
            <h3>Veja o código por trás dos projetos.</h3>
            <p>Repositórios organizados ajudam a mostrar raciocínio técnico, histórico de evolução e cuidado com entrega.</p>
          </div>
          <a className="button" href={profile.githubUrl} target="_blank" rel="noreferrer">
            Abrir GitHub
          </a>
        </BentoCard>
      </div>
    </section>
  )
}

export default GithubSection
