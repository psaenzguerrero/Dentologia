import { useState } from 'react'

const faqs = [
  { q: '¿Ofrecen financiación?', a: 'Sí, trabajamos con opciones de financiación flexibles tras la valoración inicial.' },
  { q: '¿Duele el tratamiento?', a: 'Utilizamos técnicas y anestesia moderna para que la experiencia sea cómoda y segura.' },
  { q: '¿Atienden a niños?', a: 'Sí, contamos con especialistas en odontopediatría y abordaje adaptado a los peques.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between text-left">
        <span className="text-sm font-medium text-slate-900">{q}</span>
        <span className="text-slate-500">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-sm text-slate-600">{a}</p>}
    </div>
  )
}

export default function Faq() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Preguntas frecuentes</h1>
      <p className="mt-3 text-slate-600">Resolvemos las dudas más habituales antes de tu visita.</p>

      <div className="mt-8 space-y-4">
        {faqs.map((f) => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </div>
  )
}
