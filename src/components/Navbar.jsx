import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/tratamientos', label: 'Tratamientos' },
  { to: '/sobre-nosotros', label: 'Sobre nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white font-bold">D</span>
            <span className="text-lg font-semibold text-slate-900">Dentología</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm font-medium transition-colors hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-slate-600'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contacto" className="btn-primary">Pide tu cita</Link>
          </nav>

          <button
            aria-label="Abrir menú"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1">
              <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-slate-900 transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-slate-50 ${isActive ? 'text-brand-700' : 'text-slate-700'}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link to="/contacto" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">Pide tu cita</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
