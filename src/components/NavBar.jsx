import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10 bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-6 w-6">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-purple-500 to-yellow-300" />
            <span className="absolute inset-0 rounded-lg blur-md opacity-70 bg-gradient-to-tr from-purple-500 to-yellow-300" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">Bouchachi</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `px-3 py-1 rounded-md transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
