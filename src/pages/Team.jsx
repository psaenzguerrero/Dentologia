import { motion } from 'framer-motion'

const team = [
  { name: 'Dra. Marta Gómez', role: 'Odontóloga General', desc: 'Más de 10 años de experiencia en rehabilitación oral y estética.' },
  { name: 'Dr. Luis Pérez', role: 'Ortodoncista', desc: 'Especialista en ortodoncia invisible y ortopedia dentofacial.' },
  { name: 'Dra. Paula Ruiz', role: 'Endodoncista', desc: 'Tratamientos conservadores con microscopio y técnicas mínimamente invasivas.' },
]

export default function Team() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Nuestro equipo</h1>
      <p className="mt-3 text-slate-600">Profesionales dedicados a tu salud bucodental.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card p-6"
          >
            <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-accent-100 to-brand-100" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{m.name}</h3>
            <p className="text-sm text-brand-700">{m.role}</p>
            <p className="mt-2 text-sm text-slate-600">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
