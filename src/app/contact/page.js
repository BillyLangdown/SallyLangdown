'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your form submission logic or a service like Formspree
    setSubmitted(true)
  }

  return (
    <div className="page-enter">
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-36 pb-14 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#9a9490] font-sans mb-4">
            Get in touch
          </p>
          <h1 className="font-serif italic text-5xl sm:text-6xl text-[#1a1a17] leading-[1.05]">
            Say hello.
          </h1>
          <p className="mt-5 font-sans text-[#4a4540] text-base sm:text-lg leading-relaxed">
            Whether you saw something you loved at an exhibition, would like to
            enquire about a piece, or simply want to say hello — I&rsquo;d be glad
            to hear from you.
          </p>
        </div>
      </section>

      {/* ── Form ─────────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto pb-24 sm:pb-32">
        <div className="max-w-xl">
          {submitted ? (
            <div className="py-14">
              <div className="h-px w-10 bg-[#c4956a] mb-8" />
              <p className="font-serif italic text-3xl text-[#1a1a17] leading-snug">
                Thank you — I&rsquo;ll be in touch soon.
              </p>
              <p className="mt-4 font-sans text-[#4a4540] text-sm leading-relaxed">
                Your message has been received. I usually reply within a couple of days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] uppercase tracking-[0.25em] text-[#9a9490] font-sans mb-2"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#e6dfd7] focus:border-[#c4956a] outline-none py-3 font-sans text-[#1a1a17] text-base transition-colors duration-200 placeholder:text-[#c4bdb6]"
                  placeholder="Sally Langdown"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] uppercase tracking-[0.25em] text-[#9a9490] font-sans mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#e6dfd7] focus:border-[#c4956a] outline-none py-3 font-sans text-[#1a1a17] text-base transition-colors duration-200 placeholder:text-[#c4bdb6]"
                  placeholder="hello@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] uppercase tracking-[0.25em] text-[#9a9490] font-sans mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#e6dfd7] focus:border-[#c4956a] outline-none py-3 font-sans text-[#1a1a17] text-base resize-none transition-colors duration-200 placeholder:text-[#c4bdb6]"
                  placeholder="I saw your work at... / I'd love to ask about..."
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-6">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-white bg-[#1a1a17] hover:bg-[#c4956a] px-8 py-4 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4956a]"
                >
                  Send message
                  <span className="block w-6 h-px bg-current" />
                </button>

                <p className="text-[#9a9490] text-xs font-sans hidden sm:block">
                  Or email directly:{' '}
                  <a
                    href="mailto:sally@example.com"
                    className="text-[#4a4540] hover:text-[#c4956a] transition-colors underline underline-offset-2"
                  >
                    sally@example.com
                  </a>
                </p>
              </div>

              <p className="text-[#9a9490] text-xs font-sans sm:hidden">
                Or email:{' '}
                <a
                  href="mailto:sally@example.com"
                  className="text-[#4a4540] hover:text-[#c4956a] transition-colors underline underline-offset-2"
                >
                  sally@example.com
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
