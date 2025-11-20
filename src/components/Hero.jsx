import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-slate-900">
      {/* 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900" />

      {/* Copy */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-6xl mx-auto px-6 pb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sky-300/80">
            <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]" />
            Bouchachi Studio
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Product engineering for fast, elegant shipping
          </h1>
          <p className="mt-3 text-sky-200/90 text-sm md:text-base max-w-xl">
            Calm foundations with electric precision. Systems that feel alive and ship on time.
          </p>
        </div>
      </div>
    </section>
  )
}
