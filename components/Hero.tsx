import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Imagen de fondo — ocupa toda la pantalla */}
      <Image
        src="/images/final.jpg"
        alt="Bianca Boutique — Pestañas para siempre"
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      {/* Overlay muy sutil — oscurece los bordes, deja el centro visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Texto bottom-right — igual que la referencia */}
      <div className="absolute bottom-20 right-10 md:right-16 text-right z-10">
        <h1 className="text-white leading-tight mb-5">
          {/* "Pestañas" en serif italic — igual que "Lashes" en el original */}
          <span
            className="block text-5xl md:text-7xl font-light italic"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Pestañas
          </span>
          {/* "PARA SIEMPRE" en sans uppercase — igual que "FOR DAYS" */}
          <span
            className="block text-4xl md:text-6xl font-light tracking-[0.12em] uppercase"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Para Siempre
          </span>
        </h1>

        {/* Botón — borde blanco, sin relleno, igual al original */}
        <a
          href="#reservar"
          className="inline-block px-6 py-2.5 border border-white text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Reserva un servicio &rsaquo;
        </a>
      </div>

      {/* Scroll Down — centrado en la parte inferior */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <span
          className="text-white/80 text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Scroll Down
        </span>
        <svg
          className="text-white/80 animate-bounce mt-1"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
        >
          <path
            d="M1 1l9 9 9-9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
