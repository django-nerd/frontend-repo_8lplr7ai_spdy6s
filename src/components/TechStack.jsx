import { Android, Apple, Code2, Cpu, Boxes } from 'lucide-react'

const skills = [
  { icon: Android, label: 'Android / Kotlin' },
  { icon: Apple, label: 'iOS / Swift' },
  { icon: Boxes, label: 'Flutter' },
  { icon: Code2, label: 'React Native' },
  { icon: Cpu, label: 'Clean Architecture' },
]

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900">Tech I Use</h2>
      <p className="mt-1 text-gray-600">A snapshot of my core tools and approaches</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="rounded-lg bg-gray-900 p-2 text-white"><Icon className="h-5 w-5" /></div>
            <span className="font-medium text-gray-800">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
