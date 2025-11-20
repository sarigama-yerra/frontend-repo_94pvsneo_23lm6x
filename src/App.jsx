import React from 'react'
import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <section className="text-center">
          <div className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-500 to-yellow-300 relative">
            <span className="absolute inset-0 blur-xl opacity-60 rounded-2xl bg-gradient-to-tr from-purple-500 to-yellow-300" />
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">Vite-style, modern, fast</h1>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Minimal surface, sharp motion, and neon accents. Explore the new About page built with a clean Vite aesthetic.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/about" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">
              Open About Page
            </Link>
            <a href="/test" className="px-5 py-2.5 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors">
              Backend Test
            </a>
          </div>
        </section>

        <section className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Modern UI',
              desc: 'Crisp cards, subtle glow, and smooth micro-interactions.',
            },
            {
              title: 'Vite Energy',
              desc: 'Lightweight, fast HMR, and a bold gradient identity.',
            },
            {
              title: 'Clean Stack',
              desc: 'React + Tailwind + Motion, built for speed and clarity.',
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:translate-y-[-2px] transition-transform">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{c.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
