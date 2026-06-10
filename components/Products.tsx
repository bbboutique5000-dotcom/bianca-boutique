'use client';

import Image from 'next/image';
import { useState } from 'react';

const lines = [
  {
    id: 'elite',
    name: 'Línea Elite',
    tagline: 'Lo mejor de lo mejor',
    description:
      'Formulaciones de última generación con ingredientes activos de alta concentración. Para quienes exigen resultados extraordinarios.',
    color: 'var(--bb-noir)',
    badge: '★ Premium',
    products: [
      {
        id: 1,
        name: 'Sérum Regenerador de Pestañas',
        description:
          'Fórmula intensiva con péptidos y biotina para estimular el crecimiento y fortalecer cada pestaña desde la raíz.',
        price: '89 €',
        img: '/images/extension-pestanas.jpg',
      },
      {
        id: 2,
        name: 'Aceite Nutritivo para Cejas',
        description:
          'Blend de aceites de argán, ricino y vitamina E para densificar y definir las cejas con uso diario.',
        price: '72 €',
        img: '/images/service-tint.png',
      },
      {
        id: 3,
        name: 'Kit de Mantenimiento Elite',
        description:
          'Conjunto completo: sérum, acondicionador nocturno y cepillo de precisión para mantener tus extensiones perfectas.',
        price: '145 €',
        img: '/images/service-lift.png',
      },
    ],
  },
  {
    id: 'excelente',
    name: 'Línea Excelente',
    tagline: 'Calidad profesional para uso diario',
    description:
      'Resultados visibles y duraderos con ingredientes probados. La elección de nuestras clientas más fieles.',
    color: 'var(--bb-rose-dark)',
    badge: '✦ Recomendado',
    products: [
      {
        id: 4,
        name: 'Acondicionador de Pestañas',
        description:
          'Hidrata y protege las extensiones tras cada limpieza, prolongando su duración hasta un 40% más.',
        price: '45 €',
        img: '/images/lash-02.jpg',
      },
      {
        id: 5,
        name: 'Sérum de Cejas con Keratina',
        description:
          'Keratina vegetal y pantenol para rellenar huecos y dar volumen natural a las cejas en 4 semanas.',
        price: '38 €',
        img: '/images/brow-threading.png',
      },
      {
        id: 6,
        name: 'Champú sin Sulfatos para Lashes',
        description:
          'Limpieza suave y profunda formulada especialmente para extensiones. Sin aceites ni sulfatos agresivos.',
        price: '28 €',
        img: '/images/lash-03.jpg',
      },
    ],
  },
  {
    id: 'buena',
    name: 'Línea Buena',
    tagline: 'El mejor equilibrio calidad-precio',
    description:
      'Productos eficaces a un precio accesible. Perfectos para empezar tu rutina de cuidado o complementar tu tratamiento.',
    color: 'var(--bb-rose)',
    badge: '◎ Esencial',
    products: [
      {
        id: 7,
        name: 'Gel Fijador de Pestañas',
        description:
          'Mantén el curl de tus pestañas todo el día con esta fórmula ligera y sin residuo.',
        price: '18 €',
        img: '/images/gallery-07.jpg',
      },
      {
        id: 8,
        name: 'Cepillo de Limpieza Facial',
        description:
          'Limpieza suave alrededor de las extensiones sin dañarlas. Cerdas ultrafinas de silicona.',
        price: '14 €',
        img: '/images/gallery-08.jpg',
      },
      {
        id: 9,
        name: 'Kit Básico de Inicio',
        description:
          'Todo lo esencial en un pack: cepillo, champú y acondicionador para comenzar a cuidar tus pestañas.',
        price: '35 €',
        img: '/images/gallery-04.jpg',
      },
    ],
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('elite');
  const activeLine = lines.find((l) => l.id === activeTab)!;

  return (
    <section id="productos" className="py-24 bg-bb-rose-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-bb-rose-dark text-xs tracking-[0.4em] uppercase block mb-4"
            style={{ fontFamily: 'var(--bb-font-body)' }}
          >
            Tienda Bianca Boutique
          </span>
          <h2
            className="text-bb-noir text-4xl md:text-5xl font-light tracking-wide mb-6"
            style={{ fontFamily: 'var(--bb-font-heading)' }}
          >
            Nuestros Productos
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-bb-rose" />
            <div className="w-1.5 h-1.5 rounded-full bg-bb-rose" />
            <div className="h-px w-12 bg-bb-rose" />
          </div>
          <p
            className="text-bb-rose-dark max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: 'var(--bb-font-body)' }}
          >
            Tres líneas cuidadosamente seleccionadas para adaptarse a cada necesidad y presupuesto.
          </p>
        </div>

        {/* Tabs de líneas */}
        <div className="flex justify-center gap-0 mb-12">
          {lines.map((line) => (
            <button
              key={line.id}
              onClick={() => setActiveTab(line.id)}
              className={`px-8 py-4 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                activeTab === line.id
                  ? 'bg-bb-noir text-white border-bb-noir'
                  : 'bg-white text-bb-noir border-bb-rose hover:border-bb-noir'
              }`}
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              {line.name}
            </button>
          ))}
        </div>

        {/* Descripción de la línea activa */}
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1 text-xs tracking-widest uppercase mb-3"
            style={{
              fontFamily: 'var(--bb-font-body)',
              color: activeLine.color,
              border: `1px solid ${activeLine.color}`,
            }}
          >
            {activeLine.badge}
          </span>
          <h3
            className="text-bb-noir text-3xl font-light mb-2"
            style={{ fontFamily: 'var(--bb-font-heading)' }}
          >
            {activeLine.tagline}
          </h3>
          <p
            className="text-bb-rose-dark text-sm max-w-lg mx-auto"
            style={{ fontFamily: 'var(--bb-font-body)' }}
          >
            {activeLine.description}
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {activeLine.products.map((p) => (
            <div
              key={p.id}
              className="group bg-white border border-bb-rose-light hover:border-bb-rose hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-bb-noir/10 group-hover:bg-bb-noir/5 transition-colors duration-300" />
                <span
                  className="absolute top-3 left-3 px-2 py-1 text-[10px] tracking-widest uppercase text-white"
                  style={{
                    fontFamily: 'var(--bb-font-body)',
                    backgroundColor: activeLine.color,
                  }}
                >
                  {activeLine.badge}
                </span>
              </div>
              <div className="p-6">
                <h4
                  className="text-bb-noir text-lg font-light tracking-wide mb-2"
                  style={{ fontFamily: 'var(--bb-font-heading)' }}
                >
                  {p.name}
                </h4>
                <p
                  className="text-bb-rose-dark text-sm leading-relaxed mb-5"
                  style={{ fontFamily: 'var(--bb-font-body)' }}
                >
                  {p.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-bb-rose-light">
                  <span
                    className="text-bb-noir text-lg font-light"
                    style={{ fontFamily: 'var(--bb-font-heading)' }}
                  >
                    {p.price}
                  </span>
                  <a
                    href="#reservar"
                    className="px-4 py-2 text-[10px] tracking-[0.2em] uppercase border border-bb-noir text-bb-noir hover:bg-bb-noir hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'var(--bb-font-body)' }}
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón ver más */}
        <div className="text-center">
          <a href="/productos" className="bb-btn-primary">
            Ver Más Productos
          </a>
        </div>

      </div>
    </section>
  );
}
