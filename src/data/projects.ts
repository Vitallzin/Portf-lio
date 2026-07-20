export type ProjectDetail = {
  slug: string
  name: string
  tagline: string
  description: string
  highlights: string[]
  techStack: string[]
  tools: string[]
  status: string
  demoUrl: string | null
  screenshot: string | null
  repoUrl: string
  cover: string
}

export function getDemoUrl(project: ProjectDetail) {
  if (!project.demoUrl) {
    return null
  }

  return /^https?:\/\//.test(project.demoUrl) ? project.demoUrl : `https://${project.demoUrl}`
}

export function getSiteDomain(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

export function getScreenshotUrl(project: ProjectDetail) {
  if (project.screenshot) {
    return project.screenshot
  }

  const demoUrl = getDemoUrl(project)

  if (demoUrl) {
    return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(demoUrl)}?w=1200&h=750`
  }

  return null
}

export const projectsData: ProjectDetail[] = [
  {
    slug: 'pokedex',
    name: 'Pokedex',
    tagline: 'Catálogo de Pokémon consumindo API pública.',
    description:
      'A Pokédex é uma aplicação web desenvolvida para oferecer uma experiência completa de exploração do universo Pokémon. Além da consulta de informações detalhadas sobre cada Pokémon, a plataforma permite comparar estatísticas, criar times personalizados, gerenciar favoritos e utilizar filtros avançados para facilitar a navegação. O projeto integra a PokéAPI para obtenção dos dados oficiais e o Firebase para autenticação e armazenamento das informações de cada usuário, resultando em uma aplicação dinâmica, responsiva e com recursos personalizados.',
    highlights: ['Catálogo completo de Pokémon com informações detalhadas.', 'Interface intuitiva e responsiva para uma experiência de usuário agradável.', 'Integração com a API pública do PokéAPI para obter dados atualizados.'],
    techStack: ['React', 'TypeScript','React Router', 'Firebase', 'FireStore', 'Axios', 'Framer Motion', 'Vite'],
    tools: ['ESLint', 'Vercel', 'Git', 'GitHub'],
    status: 'Projeto pessoal',
    demoUrl: "https://pokedex-ivory-iota.vercel.app",
    screenshot: null,
    repoUrl: 'https://github.com/Vitallzin/pokedex',
    cover: 'linear-gradient(135deg, #9d4dff, #ff4fd8)',
  },
  {
    slug: 'lies-of-p-wiki',
    name: 'Lies Of P Wiki',
    tagline: 'Wiki com informações e conteúdo sobre o jogo Lies of P.',
    description:
      'A Lies of P Wiki é uma plataforma desenvolvida para reunir informações completas sobre o jogo Lies of P em um único lugar. O projeto organiza conteúdos como armas, chefes, personagens, classes, amuletos e outros sistemas do jogo, facilitando a consulta tanto para novos jogadores quanto para quem busca informações específicas durante a gameplay. Além de servir como uma wiki funcional, o projeto também foi uma oportunidade para aplicar conceitos de arquitetura de componentes, organização de conteúdo e criação de interfaces intuitivas.',
    highlights: ['Conteúdo organizado em categorias para facilitar a navegação.', 'Páginas dedicadas para chefes, armas, personagens, classes e DLC.', 'Interface inspirada na identidade visual de Lies of P.', 'Layout responsivo para diferentes tamanhos de tela.', 'Estrutura preparada para receber novos conteúdos e expansões.'],
    techStack: ['TypeScript', 'React', 'Vite', 'React Router'],
    tools: ['ESLint', 'Vercel'],
    status: 'Projeto pessoal',
    demoUrl: 'https://lies-of-p-wiki.vercel.app',
    screenshot: null,
    repoUrl: 'https://github.com/Vitallzin/lies-of-P-wiki',
    cover: 'linear-gradient(135deg, #5ff4d2, #9d4dff)',
  },
  {
    slug: 'convertorautomatic',
    name: 'ConvertorAutomatic',
    tagline: 'Site para utilizar a API de moedas.',
    description:
      'O Conversor de Moedas é uma aplicação web desenvolvida para realizar conversões entre diferentes moedas utilizando cotações em tempo real. O projeto foi criado com foco em oferecer uma interface simples, intuitiva e responsiva, permitindo ao usuário selecionar as moedas de origem e destino, inserir um valor e obter o resultado de forma rápida. Durante o desenvolvimento, foram aplicados conceitos como consumo de APIs externas, componentização, gerenciamento de estado, manipulação de dados assíncronos e criação de uma experiência moderna para o usuário',
    highlights: ['Conversão entre diversas moedas utilizando cotações em tempo real.', 'Seleção dinâmica das moedas de origem e destino.', 'Botão para inverter rapidamente as moedas selecionadas.','Exibição automática das bandeiras correspondentes a cada moeda.','Alternância entre modo claro e escuro com persistência da preferência do usuário.','Interface responsiva para desktop, tablet e dispositivos móveis.','Atualização instantânea dos resultados após cada conversão.'],
    techStack: ['JavaScript', 'React', 'Vite'],
    tools: ['ESLint', 'Vercel'],
    status: 'Projeto pessoal',
    demoUrl: 'https://convertor-automatic.vercel.app/',
    screenshot: null,
    repoUrl: 'https://github.com/Vitallzin/ConvertorAutomatic',
    cover: 'linear-gradient(135deg, #ff4fd8, #181826)',
  },
  
]
