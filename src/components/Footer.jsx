import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white font-bold">D</span>
              <span className="text-lg font-semibold text-slate-900">Dentología</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">Cuidamos tu sonrisa con un enfoque humano y la mejor tecnología.</p>
            <div className="mt-4 flex items-center gap-3 text-slate-500">
              <a href="#" aria-label="Instagram" className="hover:text-brand-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-brand-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v2h2.3L15 14.9h-2v7A10 10 0 0 0 22 12"></path></svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:text-brand-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.4 20.6L2 22l1.6-.4A11 11 0 1 0 20.5 3.5ZM12 19.1a7.1 7.1 0 1 1 0-14.2 7.1 7.1 0 0 1 0 14.2Zm3-5.6c-.2-.1-1-.5-1.1-.6s-.3-.1-.4.1-.5.6-.6.7-.2.1-.4 0a5.8 5.8 0 0 1-1.7-1 6.4 6.4 0 0 1-1.1-1.3c-.1-.2 0-.3.1-.4l.3-.3.2-.3c.1-.1 0-.2 0-.3l-.6-1.4c-.1-.3-.2-.3-.4-.3h-.3c-.1 0-.3 0-.5.2s-.7.6-.7 1.6.8 1.9.9 2 .1.2.3.5a7.9 7.9 0 0 0 3 2.8c.4.2.8.3 1.1.4.5.1 1 0 1.4 0 .4 0 1.1-.5 1.3-1s.2-.9.1-1-.2-.1-.4-.2Z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Clínica</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link to="/sobre-nosotros" className="hover:text-brand-700">Sobre nosotros</Link></li>
              <li><Link to="/tratamientos" className="hover:text-brand-700">Tratamientos</Link></li>
              <li><Link to="/contacto" className="hover:text-brand-700">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Tel: 900 123 456</li>
              <li>Email: citas@dentologia.es</li>
              <li>Av. Salud 123, Madrid</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Newsletter</h3>
            <p className="mt-2 text-sm text-slate-600">Novedades y consejos de salud bucodental.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" required placeholder="Tu email" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300" />
              <button className="btn-primary px-4 py-2 text-sm">Suscribirme</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dentología. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-700">Aviso legal</a>
            <a href="#" className="hover:text-brand-700">Privacidad</a>
            <a href="#" className="hover:text-brand-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
