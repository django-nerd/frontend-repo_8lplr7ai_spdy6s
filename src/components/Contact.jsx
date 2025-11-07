import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">Get in touch</h3>
        </div>
        <p className="mt-1 text-gray-600">Have an idea or a role in mind? Let’s talk.</p>

        {sent ? (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-700">Thanks! I’ll get back to you soon.</div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              required
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
