'use client';

import { useState } from 'react';

const links = [
  { label: 'Servicios',     href: '/#servicios' },
  { label: 'Acerca de Mí',  href: '/#nosotras' },
  { label: 'Reservar Cita', href: '/#reservar' },
  { label: 'Productos',     href: '/productos' },
  { label: 'Galería',       href: '/#galeria' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/biancaboutique',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/biancaboutique',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between pl-8 pr-40 h-[78px]">
        {/* Logo — igual que "Chic Lash / Boutique" en la referencia */}
        <a
          href="/"
          className="flex flex-col leading-none shrink-0 group"
        >
          <span
            className="text-[#513550] text-[26px] font-normal tracking-wide leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Bianca
          </span>
          <span
            className="text-[#513550]/80 text-[12px] font-light tracking-[0.22em] leading-tight"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Boutique<span className="text-[8px] align-super ml-0.5">®</span>
          </span>
        </a>

        {/* Nav links + socials agrupados juntos */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[#513550] hover:text-[#745E73] text-[16px] font-bold tracking-[0.16em] uppercase transition-colors duration-200"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons — justo después de GALERÍA */}
          <div className="flex items-center gap-2.5 shrink-0">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[#513550]/70 hover:text-[#513550] border border-[#513550]/40 hover:border-[#513550] rounded-full p-[5px] transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between px-5 py-3">
        <a
          href="/"
          className="text-white text-base tracking-widest italic"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Bianca Boutique
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-label="Menú"
        >
          <span className={`block h-px w-6 bg-[#513550] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-[#513550] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-[#513550] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 bg-white border-t border-[#EBE1E5] ${open ? 'max-h-80' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center gap-5 py-7 border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#513550] hover:text-[#745E73] text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#513550]/70 hover:text-[#513550] border border-[#513550]/40 rounded-full p-1.5"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
