// Configuração do giscus (comentários via GitHub Discussions).
// Gere os valores reais em https://giscus.app depois de habilitar
// "Discussions" no seu repositório do GitHub.
export const giscusConfig = {
  repo: 'Vitallzin/Portf-lio' as `${string}/${string}`,
  repoId: 'R_kgDOTeifaQ',
  category: 'Comentários',
  categoryId: 'DIC_kwDOTeifac4DBne3',
}

export const isGiscusConfigured =
  giscusConfig.repoId !== 'PREENCHA_REPO_ID' && giscusConfig.categoryId !== 'PREENCHA_CATEGORY_ID'
