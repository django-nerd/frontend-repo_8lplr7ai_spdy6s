import { Github, Mail, Linkedin, Smartphone, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-indigo-700">
              <Smartphone className="h-4 w-4" />
              <span className="text-sm font-medium">Mobile Developer</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Agung Tri Utama
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              I design and build delightful mobile experiences. I focus on performance,
              clean architecture, and shipping apps users love. Currently exploring
              modern stacks across native and cross‑platform.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/agungtriu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:shadow-md"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:agungtriu@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-black"
              >
                <Globe className="h-4 w-4" />
                View Projects
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-1 shadow-xl">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                <img
                  src="https://avatars.githubusercontent.com/u/55866106?v=4"
                  alt="Agung Tri Utama"
                  className="h-48 w-48 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
