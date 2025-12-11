import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-sm font-semibold text-brand-700">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">Página no encontrada</h1>
      <p className="mt-2 text-slate-600">La página que buscas no existe o ha cambiado de ubicación.</p>
      <div className="mt-6">
        <Link to="/" className="btn-primary">Volver al inicio</Link>
      </div>
    </div>
  )
}
