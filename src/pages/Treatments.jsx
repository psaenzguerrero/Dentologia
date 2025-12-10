import { motion } from 'framer-motion'

const treatments = [
  { name: 'Limpieza y profilaxis', desc: 'Higiene dental profesional para prevenir caries y enfermedades periodontales.' },
  { name: 'Ortodoncia invisible', desc: 'Alineadores transparentes para corregir la posición de los dientes.' },
  { name: 'Implantes dentales', desc: 'Reemplazo de piezas perdidas con resultados naturales y duraderos.' },
  { name: 'Estética dental', desc: 'Blanqueamiento, carillas y soluciones para una sonrisa perfecta.' },
  { name: 'Endodoncia', desc: 'Tratamiento de conductos para salvar piezas dañadas.' },
  { name: 'Odontopediatría', desc: 'Cuidado dental especializado para los más pequeños.' },
]

export default function Treatments() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Tratamientos</h1>
      <p className="mt-3 text-slate-600">Descubre nuestras especialidades y cómo podemos ayudarte.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((t) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
            <button className="mt-4 text-brand-700 hover:text-brand-800">Saber más →</button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
