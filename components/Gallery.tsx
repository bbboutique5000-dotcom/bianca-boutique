'use client';

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/images/gallery-01.jpg', alt: 'Extensiones clásicas' },
  { src: '/images/gallery-02.jpg', alt: 'Volumen ruso' },
  { src: '/images/gallery-03.jpg', alt: 'Mirada cat eye' },
  { src: '/images/gallery-04.jpg', alt: 'Look natural' },
  { src: '/images/gallery-05.jpg', alt: 'Diseño de cejas' },
  { src: '/images/gallery-06.jpg', alt: 'Extensiones mega volumen' },
  { src: '/images/gallery-07.jpg', alt: 'Resultado lifting' },
  { src: '/images/gallery-08.jpg', alt: 'Tinte de pestañas' },
  { src: '/images/gallery-09.jpg', alt: 'Look glamour' },
  { src: '/images/gallery-10.jpg', alt: 'Volumen híbrido' },
  { src: '/images/gallery-11.jpg', alt: 'Diseño personalizado' },
  { src: '/images/gallery-12.jpg', alt: 'Resultado final' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 bg-[#FCFAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-[#745E73] text-xs tracking-[0.4em] uppercase block mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Nuestros trabajos
          </span>
          <h2
            className="text-[#513550] text-4xl md:text-5xl font-light tracking-wide mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Galería
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#D3BCC5]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D3BCC5]" />
            <div className="h-px w-12 bg-[#D3BCC5]" />
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden bg-[#EBE1E5] cursor-pointer ${
                i % 7 === 0 || i % 7 === 4 ? 'row-span-2' : ''
              }`}
              style={{ minHeight: i % 7 === 0 || i % 7 === 4 ? '380px' : '180px' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#513550]/0 group-hover:bg-[#513550]/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              className="absolute left-4 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div
              className="relative max-w-4xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                className="object-contain"
              />
            </div>
            <button
              className="absolute right-4 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p
            className="text-[#745E73] text-sm tracking-wide mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            ¿Quieres ver más? Síguenos en Instagram
          </p>
          <a
            href="https://instagram.com/biancaboutique"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @biancaboutique
          </a>
        </div>
      </div>
    </section>
  );
}
