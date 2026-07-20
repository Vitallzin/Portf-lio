import { useEffect, useState } from 'react'

type GithubRepo = {
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
  pushed_at: string
}

type GithubUser = {
  public_repos: number
  followers: number
  following: number
  bio: string | null
}

export type RepoSummary = {
  name: string
  url: string
  description: string | null
  language: string | null
  stars: number
  pushedAt: string
}

export type GithubStats = {
  user: GithubUser
  languages: string[]
  repos: RepoSummary[]
}

type State = { status: 'loading' | 'error' | 'ready'; data: GithubStats | null }

const cache = new Map<string, Promise<GithubStats>>()

function fetchGithubStats(username: string): Promise<GithubStats> {
  const cached = cache.get(username)
  if (cached) {
    return cached
  }

  const promise = (async () => {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`),
    ])

    if (!userRes.ok || !reposRes.ok) {
      throw new Error('GitHub API request failed')
    }

    const user = (await userRes.json()) as GithubUser
    const rawRepos = (await reposRes.json()) as GithubRepo[]

    const repos: RepoSummary[] = rawRepos
      .filter((repo) => !repo.fork && repo.name.toLowerCase() !== username.toLowerCase())
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        pushedAt: repo.pushed_at,
      }))

    const languageCounts = new Map<string, number>()
    repos.forEach((repo) => {
      if (repo.language) {
        languageCounts.set(repo.language, (languageCounts.get(repo.language) ?? 0) + 1)
      }
    })
    const languages = Array.from(languageCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([language]) => language)

    return { user, languages, repos }
  })()

  cache.set(username, promise)
  promise.catch(() => cache.delete(username))

  return promise
}

export function useGithubStats(username: string) {
  const [state, setState] = useState<State>({ status: 'loading', data: null })

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading', data: null })

    fetchGithubStats(username)
      .then((data) => {
        if (!cancelled) {
          setState({ status: 'ready', data })
        }
      })
      .catch(() => {
        if (!cancelled) {
          setState({ status: 'error', data: null })
        }
      })

    return () => {
      cancelled = true
    }
  }, [username])

  return state
}
