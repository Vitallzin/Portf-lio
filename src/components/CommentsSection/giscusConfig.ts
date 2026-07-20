// Configuração do giscus (comentários via GitHub Discussions).
// Gere os valores reais em https://giscus.app depois de habilitar
// "Discussions" no seu repositório do GitHub.
export const giscusConfig = {
  repo: 'Vitallzin/myportfolio' as `${string}/${string}`,
  repoId: 'PREENCHA_REPO_ID',
  category: 'Comentários',
  categoryId: 'PREENCHA_CATEGORY_ID',
}

export const isGiscusConfigured =
  giscusConfig.repoId !== 'PREENCHA_REPO_ID' && giscusConfig.categoryId !== 'PREENCHA_CATEGORY_ID'
