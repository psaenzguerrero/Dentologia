import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Sobre nosotros</h1>
          <p className="mt-4 text-slate-600">Somos una clínica dental comprometida con la excelencia y el trato humano. Con más de 10 años de experiencia, ofrecemos soluciones personalizadas con tecnología avanzada.</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Atención integral y coordinada</li>
            <li>• Planes de tratamiento transparentes</li>
            <li>• Financiación y facilidades de pago</li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="h-48 rounded-2xl bg-brand-100"></div>
          <div className="h-48 rounded-2xl bg-accent-100"></div>
          <div className="h-48 rounded-2xl bg-accent-200"></div>
          <div className="h-48 rounded-2xl bg-brand-200"></div>
        </motion.div>
      </div>
    </div>
  )
}
