import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Target, Handshake, CircuitBoard, ChevronRight } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
}

const lineVariants = {
  initial: { pathLength: 0, opacity: 0.5 },
  animate: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' } }
}

function Capsule({ icon: Icon, title, bullets, index }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, boxShadow: '0 0 0 1px rgba(56,189,248,0.35), 0 0 25px rgba(56,189,248,0.2)' }}
      className="group relative rounded-2xl border border-slate-700/70 bg-slate-800/50 backdrop-blur-sm p-5 md:p-6 text-slate-100 transition-all">
      <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-cyan-400/80 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
      <div className="flex items-center gap-2 text-xs text-sky-300/90">
        <span className="px-2 py-0.5 rounded-full bg-slate-900/70 border border-slate-700/60">{index}</span>
        <Icon className="h-4 w-4 text-cyan-300" />
        <span className="font-medium">{title}</span>
      </div>
      <ul className="mt-3 space-y-1.5 text-[0.9rem] text-slate-300">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <ChevronRight className="mt-[2px] h-3.5 w-3.5 text-cyan-400/90" />
            <span className="leading-tight">{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-14 md:py-20 overflow-hidden">
        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]">
          <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-cyan-300" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* micro intro */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.div variants={item} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-sky-300/90">
              <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]" />
              About the studio
            </motion.div>
            <motion.h2 variants={item} className="mt-2 text-[2.05rem] leading-tight font-semibold text-white">
              I design and ship product systems that feel inevitable
            </motion.h2>
            <motion.p variants={item} className="mt-2 text-slate-300 text-sm max-w-2xl">
              From messy brief to crisp interface and production backend — fast, focused, accountable.
            </motion.p>
          </motion.div>

          {/* control panel / circuit */}
          <div className="mt-10 md:mt-14 relative">
            {/* circuit lines */}
            <motion.svg
              viewBox="0 0 1200 260"
              className="hidden md:block absolute -z-0 left-0 right-0 mx-auto w-full"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.path
                d="M100 40 H400 C520 40 520 120 640 120 H1080"
                stroke="url(#grad1)" strokeWidth="2" fill="none" variants={lineVariants}
              />
              <motion.path
                d="M100 200 H420 C540 200 540 120 660 120 H1080"
                stroke="url(#grad2)" strokeWidth="2" fill="none" variants={lineVariants}
              />
              <defs>
                <linearGradient id="grad1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
                <linearGradient id="grad2" x1="0" x2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* panel bar */}
            <div className="relative z-10 grid md:grid-cols-[1fr,auto,1fr] gap-6 items-start">
              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
                <Capsule index="1" icon={Zap} title="What I do" bullets={[
                  'Idea → flows, UI, backend',
                  'Design systems wired to code',
                  'Ship-ready assets + repos'
                ]} />
                <Capsule index="2" icon={Target} title="Who it’s for" bullets={[
                  'Founders on a deadline',
                  'Product teams shipping V1/V2',
                  'Agencies needing execution'
                ]} />
              </motion.div>

              {/* central icon block */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative mx-auto">
                <div className="relative h-40 w-40 rounded-2xl bg-slate-900/80 border border-slate-700/70 backdrop-blur-sm flex items-center justify-center shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_0_40px_rgba(56,189,248,0.08)]">
                  <CircuitBoard className="h-16 w-16 text-cyan-300" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-400/30" />
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 blur-[2px]" />
                </div>
                <p className="mt-3 text-center text-xs text-slate-400">Product engineering control core</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
                <Capsule index="3" icon={Handshake} title="How we work" bullets={[
                  'One focused kickoff call',
                  'Tiny milestones, weekly drops',
                  'Clear handover + docs'
                ]} />
              </motion.div>
            </div>
          </div>

          {/* tech strip */}
          <div className="mt-12 md:mt-16">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/60">
              <motion.div
                initial={{ backgroundPositionX: 0 }}
                animate={{ backgroundPositionX: 200 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{ backgroundImage: 'linear-gradient(90deg, rgba(56,189,248,0.0) 0%, rgba(56,189,248,0.25) 50%, rgba(56,189,248,0.0) 100%)', backgroundSize: '200px 100%' }}
              />

              <motion.ul
                className="flex items-center gap-6 md:gap-10 px-6 py-4 text-sm text-slate-200 whitespace-nowrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
              >
                {[
                  ['React', 'React'],
                  ['Next.js', 'Next.js'],
                  ['TypeScript', 'TS'],
                  ['Tailwind', 'TW'],
                  ['Node.js', 'Node'],
                  ['NestJS', 'Nest'],
                  ['PostgreSQL', 'PG'],
                  ['Prisma', 'Prisma'],
                  ['Vite', 'Vite']
                ].map(([label, short], i) => (
                  <motion.li
                    key={label}
                    variants={item}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="relative"
                  >
                    <span className="px-3 py-1.5 rounded-full bg-slate-800/70 border border-slate-700/70 shadow-[0_0_0_1px_rgba(56,189,248,0.25)]">
                      <span className="text-cyan-300/90 mr-2">{short}</span>
                      <span className="text-slate-200">{label}</span>
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <p className="mt-2 text-[11px] text-slate-400">Hover to interact • Soft glow indicates live tooling</p>
          </div>
        </div>
      </section>
    </div>
  )
}
