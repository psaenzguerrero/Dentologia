import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Enviado. Te contactaremos pronto.')
    e.currentTarget.reset()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Contacto</h1>
      <p className="mt-3 text-slate-600">Pide cita o resuelve tus dudas. Estaremos encantados de ayudarte.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="card p-6">
          <div className="grid gap-4">
            <div>
              <label className="text-sm text-slate-700">Nombre</label>
              <input required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Mensaje</label>
              <textarea rows="4" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"></textarea>
            </div>
            <button className="btn-primary self-start">Enviar</button>
          </div>
          {status && <p className="mt-4 text-sm text-brand-700">{status}</p>}
        </form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6"
        >
          <h2 className="text-lg font-semibold text-slate-900">Datos de contacto</h2>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li>Tel: 900 123 456</li>
            <li>Email: citas@dentologia.es</li>
            <li>Av. Salud 123, Madrid</li>
          </ul>
          <div className="mt-6 h-56 w-full rounded-xl bg-slate-100"></div>
        </motion.div>
      </div>
    </div>
  )
}
