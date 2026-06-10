const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotras', href: '#nosotras' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reservar', href: '#reservar' },
];

export default function Footer() {
  return (
    <footer className="bg-bb-noir text-bb-rose-light">
      {/* Franja superior */}
      <div className="border-b border-bb-noir/40 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Marca */}
          <div>
            <div className="mb-4">
              <span
                className="text-bb-rose text-xs tracking-[0.4em] uppercase block"
                style={{ fontFamily: 'var(--bb-font-body)' }}
              >
                Bianca
              </span>
              <span
                className="text-white text-3xl font-light tracking-widest"
                style={{ fontFamily: 'var(--bb-font-heading)' }}
              >
                BOUTIQUE
              </span>
            </div>
            <p
              className="text-bb-rose-light/60 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              Estudio de belleza especializado en extensiones de pestañas y
              tratamientos oculares premium. Tu mirada, nuestra pasión.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4
              className="text-bb-rose text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-bb-rose-light/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
                    style={{ fontFamily: 'var(--bb-font-body)' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              {/* Próximamente */}
              <li>
                <span
                  className="text-bb-rose-light/30 text-sm tracking-wide cursor-default"
                  style={{ fontFamily: 'var(--bb-font-body)' }}
                >
                  Videos <span className="text-xs text-bb-rose/50 ml-1">Próximamente</span>
                </span>
              </li>
              <li>
                <span
                  className="text-bb-rose-light/30 text-sm tracking-wide cursor-default"
                  style={{ fontFamily: 'var(--bb-font-body)' }}
                >
                  Membresía <span className="text-xs text-bb-rose/50 ml-1">Próximamente</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Contacto & Social */}
          <div>
            <h4
              className="text-bb-rose text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              Contacto
            </h4>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'hola@biancaboutique.es' },
                { label: '+34 600 000 000' },
                { label: 'Calle de Serrano, 45 · 28001 Madrid' },
                { label: 'Lun–Vie: 10:00 – 20:00' },
                { label: 'Sábado: 10:00 – 18:00' },
              ].map((item) => (
                <li
                  key={item.label}
                  className="text-bb-rose-light/70 text-sm"
                  style={{ fontFamily: 'var(--bb-font-body)' }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="flex gap-4">
              {[
                {
                  label: 'Instagram',
                  href: 'https://instagram.com/biancaboutique',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  label: 'TikTok',
                  href: 'https://tiktok.com/@biancaboutique',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.72a4.85 4.85 0 01-1-.03z" />
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  href: 'https://facebook.com/biancaboutique',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-bb-rose-light/50 hover:text-bb-rose transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-bb-rose-light/40 text-xs tracking-wide"
            style={{ fontFamily: 'var(--bb-font-body)' }}
          >
            © {new Date().getFullYear()} Bianca Boutique. Todos los derechos reservados.
          </p>
          <p
            className="text-bb-rose-light/30 text-xs tracking-wide"
            style={{ fontFamily: 'var(--bb-font-body)' }}
          >
            Aviso Legal · Política de Privacidad · Cookies
          </p>
        </div>
      </div>
    </footer>
  );
}
