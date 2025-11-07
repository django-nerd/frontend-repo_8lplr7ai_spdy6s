import { useEffect, useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

function ProjectCard({ repo }) {
  const topics = repo.topics || []
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
            {repo.name}
          </h3>
          {repo.description && (
            <p className="mt-1 line-clamp-2 text-sm text-gray-600">{repo.description}</p>
          )}
        </div>
        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {topics.slice(0, 4).map((t) => (
          <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
        {repo.language && <span>{repo.language}</span>}
      </div>
    </a>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('https://api.github.com/users/agungtriu/repos?per_page=12&sort=updated')
        const data = await res.json()
        setRepos(Array.isArray(data) ? data : [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Highlighted Projects</h2>
          <p className="text-gray-600">Pulled live from GitHub</p>
        </div>
        <a
          href="https://github.com/agungtriu?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md"
        >
          <Github className="h-4 w-4" /> View all
        </a>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-28 animate-pulse rounded-xl bg-gray-100" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.slice(0, 9).map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  )
}
