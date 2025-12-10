import { Link } from 'react-router-dom'
import AnimatedButton from '../components/AnimatedButton.jsx'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Tu sonrisa, nuestra prioridad</h1>
              <p className="mt-6 text-lg text-slate-600">Tratamientos dentales integrales con tecnología de vanguardia y un equipo cercano y experto.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <AnimatedButton as={Link} onClick={() => {}}>
                  <Link to="/contacto">Pide tu primera cita</Link>
                </AnimatedButton>
                <Link to="/tratamientos" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-brand-700 hover:text-brand-800">Ver tratamientos →</Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mx-auto aspect-[4/3] w-full max-w-md rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-20 rounded-xl bg-gradient-to-br from-brand-100 to-accent-100"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold text-slate-900">Por qué elegirnos</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Tecnología avanzada', desc: 'Escáneres 3D, radiología digital y planificación precisa.' },
            { title: 'Equipo experto', desc: 'Odontólogos especializados y en formación continua.' },
            { title: 'Atención cercana', desc: 'Tratamos a cada paciente como si fuera de la familia.' },
          ].map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
