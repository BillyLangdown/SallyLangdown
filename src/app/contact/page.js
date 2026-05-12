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
    setSubmitted(true)
  }

  return (
    <div className="page-enter">

      {/* ── Header ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1100px] mx-auto">

        <div className="absolute -top-20 -right-10 w-72 h-72 rounded-full bg-[#e8766a]/10 blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-[#2d8b8b]/8 blur-[60px] pointer-events-none" />

        <div className="relative z-10 max-w-xl">

          <p className="text-sm uppercase tracking-[0.25em] text-[#9a9490]">
            contact
          </p>

          <h1 className="mt-4 font-serif text-5xl sm:text-6xl text-[#1a1a17] leading-[1.05]">
            Say hello
          </h1>

          <div className="mt-6 w-10 h-[2px] bg-[#2d8b8b]" />

          <p className="mt-6 text-[#4a4540] text-base sm:text-lg leading-relaxed max-w-lg">
            If something caught your eye, or you just want to ask about a piece,
            send a message. This is the easiest way to reach her directly.
          </p>

        </div>
      </section>

      {/* ── Form ─────────────────────────────────────────────── */}
      <section className="px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1100px] mx-auto pb-28 sm:pb-36">

        <div className="max-w-xl">

          {submitted ? (
            <div className="py-16">

              <p className="text-sm uppercase tracking-[0.25em] text-[#9a9490]">
                message sent
              </p>

              <p className="mt-6 font-serif text-3xl sm:text-4xl text-[#1a1a17] leading-snug">
                Thanks for getting in touch.
              </p>

              <p className="mt-4 text-[#4a4540] leading-relaxed">
                She’ll reply as soon as she can.
              </p>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-[#9a9490] mb-2">
                  Name
                </label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-[#e6dfd7] py-3 outline-none text-[#1a1a17] placeholder:text-[#c4bdb6] focus:border-[#2d8b8b]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-[#9a9490] mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-[#e6dfd7] py-3 outline-none text-[#1a1a17] placeholder:text-[#c4bdb6] focus:border-[#2d8b8b]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-[#9a9490] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me what you're looking for…"
                  className="w-full bg-transparent border-b border-[#e6dfd7] py-3 outline-none text-[#1a1a17] placeholder:text-[#c4bdb6] focus:border-[#2d8b8b] resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">

                <button
                  type="submit"
                  className="px-7 py-4 bg-[#2d8b8b] text-white text-[11px] uppercase tracking-[0.2em] hover:opacity-90 transition"
                >
                  Send message
                </button>

                <p className="text-sm text-[#9a9490]">
                  or email:{" "}
                  <a
                    href="mailto:sally@example.com"
                    className="text-[#4a4540] underline underline-offset-2 hover:text-[#2d8b8b]"
                  >
                    sally@example.com
                  </a>
                </p>

              </div>

            </form>
          )}

        </div>
      </section>
    </div>
  )
}