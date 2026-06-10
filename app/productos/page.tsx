'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const allProducts = {
  elite: {
    name: 'Línea Elite',
    tagline: 'Lo mejor de lo mejor',
    badge: '★ Premium',
    color: 'var(--bb-noir)',
    description:
      'Formulaciones de última generación con ingredientes activos de alta concentración. Para quienes exigen resultados extraordinarios.',
    items: [
      {
        id: 1,
        name: 'Sérum Regenerador de Pestañas',
        description: 'Fórmula intensiva con péptidos y biotina para estimular el crecimiento y fortalecer cada pestaña desde la raíz.',
        price: '89 €',
        img: '/images/extension-pestanas.jpg',
      },
      {
        id: 2,
        name: 'Aceite Nutritivo para Cejas',
        description: 'Blend de aceites de argán, ricino y vitamina E para densificar y definir las cejas con uso diario.',
        price: '72 €',
        img: '/images/service-tint.png',
      },
      {
        id: 3,
        name: 'Kit de Mantenimiento Elite',
        description: 'Conjunto completo: sérum, acondicionador nocturno y cepillo de precisión para mantener tus extensiones perfectas.',
        price: '145 €',
        img: '/images/service-lift.png',
      },
      {
        id: 4,
        name: 'Mascarilla Nutritiva de Pestañas',
        description: 'Tratamiento overnight de queratina y proteínas de seda para restaurar, sellar y dar brillo intenso.',
        price: '95 €',
        img: '/images/lash-02.jpg',
      },
      {
        id: 5,
        name: 'Sérum Contorno de Ojos',
        description: 'Activos antioxidantes y ácido hialurónico para descansar y rejuvenecer la zona periocular.',
        price: '110 €',
        img: '/images/gallery-01.jpg',
      },
      {
        id: 6,
        name: 'Kit Noche Regenerador',
        description: 'Rutina nocturna premium: limpiador enzimático, sérum y bálsamo reparador para máxima recuperación.',
        price: '185 €',
        img: '/images/gallery-02.jpg',
      },
      {
        id: 7,
        name: 'Aceite de Rosa Mosqueta para Cejas',
        description: 'Aceite puro de primera presión en frío, rico en omega 3 y 6, para regenerar y densificar las cejas.',
        price: '68 €',
        img: '/images/brow-threading.png',
      },
      {
        id: 8,
        name: 'Tratamiento de Queratina Premium',
        description: 'Queratina hidrolizada de alta pureza para sellar la cutícula de cada pestaña y añadir resistencia.',
        price: '98 €',
        img: '/images/gallery-03.jpg',
      },
    ],
  },
  excelente: {
    name: 'Línea Excelente',
    tagline: 'Calidad profesional para uso diario',
    badge: '✦ Recomendado',
    color: 'var(--bb-rose-dark)',
    description:
      'Resultados visibles y duraderos con ingredientes probados. La elección de nuestras clientas más fieles.',
    items: [
      {
        id: 9,
        name: 'Acondicionador de Pestañas',
        description: 'Hidrata y protege las extensiones tras cada limpieza, prolongando su duración hasta un 40% más.',
        price: '45 €',
        img: '/images/lash-02.jpg',
      },
      {
        id: 10,
        name: 'Sérum de Cejas con Keratina',
        description: 'Keratina vegetal y pantenol para rellenar huecos y dar volumen natural a las cejas en 4 semanas.',
        price: '38 €',
        img: '/images/brow-threading.png',
      },
      {
        id: 11,
        name: 'Champú sin Sulfatos para Lashes',
        description: 'Limpieza suave y profunda formulada especialmente para extensiones. Sin aceites ni sulfatos agresivos.',
        price: '28 €',
        img: '/images/lash-03.jpg',
      },
      {
        id: 12,
        name: 'Espuma Limpiadora Facial',
        description: 'Espuma ultra suave que elimina residuos de maquillaje y sebo sin afectar el adhesivo de las extensiones.',
        price: '32 €',
        img: '/images/gallery-04.jpg',
      },
      {
        id: 13,
        name: 'Acondicionador en Spray',
        description: 'Spray de aplicación rápida para hidratar y desenredar las extensiones sin dejar residuo ni peso.',
        price: '25 €',
        img: '/images/gallery-05.jpg',
      },
      {
        id: 14,
        name: 'Pinzas de Precisión Profesionales',
        description: 'Pinzas de acero inoxidable con punta ultrafina para cuidado y mantenimiento en casa.',
        price: '42 €',
        img: '/images/gallery-06.jpg',
      },
      {
        id: 15,
        name: 'Cepillo de Cejas con Sérum',
        description: 'Cepillo doble función: aplica sérum y peina simultáneamente para un resultado uniforme y definido.',
        price: '35 €',
        img: '/images/gallery-07.jpg',
      },
      {
        id: 16,
        name: 'Protector Térmico de Pestañas',
        description: 'Escudo termoprotector que previene el daño por calor y mantiene la forma del curl en cualquier clima.',
        price: '30 €',
        img: '/images/gallery-08.jpg',
      },
    ],
  },
  buena: {
    name: 'Línea Buena',
    tagline: 'El mejor equilibrio calidad-precio',
    badge: '◎ Esencial',
    color: 'var(--bb-rose-dark)',
    description:
      'Productos eficaces a un precio accesible. Perfectos para empezar tu rutina de cuidado o complementar tu tratamiento.',
    items: [
      {
        id: 17,
        name: 'Gel Fijador de Pestañas',
        description: 'Mantén el curl de tus pestañas todo el día con esta fórmula ligera y sin residuo.',
        price: '18 €',
        img: '/images/gallery-09.jpg',
      },
      {
        id: 18,
        name: 'Cepillo de Limpieza Facial',
        description: 'Limpieza suave alrededor de las extensiones sin dañarlas. Cerdas ultrafinas de silicona.',
        price: '14 €',
        img: '/images/gallery-10.jpg',
      },
      {
        id: 19,
        name: 'Kit Básico de Inicio',
        description: 'Todo lo esencial en un pack: cepillo, champú y acondicionador para comenzar a cuidar tus pestañas.',
        price: '35 €',
        img: '/images/gallery-11.jpg',
      },
      {
        id: 20,
        name: 'Removedor de Extensiones',
        description: 'Gel disolvente de adhesivo suave y seguro para retirar extensiones en casa sin dañar la pestaña natural.',
        price: '16 €',
        img: '/images/gallery-12.jpg',
      },
      {
        id: 21,
        name: 'Almohadillas de Gel para Ojos',
        description: 'Parches de hidrogel con aloe vera y pepino para descansar y calmar la zona del ojo tras los tratamientos.',
        price: '12 €',
        img: '/images/gallery-01.jpg',
      },
      {
        id: 22,
        name: 'Sérum Básico de Crecimiento',
        description: 'Fórmula de entrada con biotina y aceite de ricino para estimular el crecimiento de pestañas y cejas.',
        price: '22 €',
        img: '/images/gallery-02.jpg',
      },
      {
        id: 23,
        name: 'Aloe Vera Puro',
        description: 'Gel de aloe vera al 99% para calmar irritaciones, hidratar y refrescar la zona periocular.',
        price: '10 €',
        img: '/images/gallery-03.jpg',
      },
      {
        id: 24,
        name: 'Cepillo Espiral para Pestañas',
        description: 'Pack de 10 cepillos de pestañas desechables de precisión para peinar y separar extensiones.',
        price: '8 €',
        img: '/images/gallery-04.jpg',
      },
    ],
  },
};

type LineKey = keyof typeof allProducts;

export default function ProductosPage() {
  const [activeTab, setActiveTab] = useState<LineKey>('excelente');
  const line = allProducts[activeTab];

  return (
    <>
      <Navbar />
      <main className="pt-[78px] bg-bb-ivory min-h-screen">

        {/* Hero de página */}
        <div className="bg-bb-noir py-16 text-center">
          <span
            className="text-bb-rose text-xs tracking-[0.4em] uppercase block mb-3"
            style={{ fontFamily: 'var(--bb-font-body)' }}
          >
            Tienda Bianca Boutique
          </span>
          <h1
            className="text-white text-4xl md:text-6xl font-light tracking-wide mb-4"
            style={{ fontFamily: 'var(--bb-font-heading)' }}
          >
            Todos los Productos
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-bb-rose/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-bb-rose/50" />
            <div className="h-px w-12 bg-bb-rose/50" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Tabs */}
          <div className="flex justify-center gap-0 mb-10">
            {(Object.keys(allProducts) as LineKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-bb-noir text-white border-bb-noir'
                    : 'bg-white text-bb-noir border-bb-rose hover:border-bb-noir'
                }`}
                style={{ fontFamily: 'var(--bb-font-body)' }}
              >
                {allProducts[key].name}
              </button>
            ))}
          </div>

          {/* Descripción línea */}
          <div className="text-center mb-12">
            <span
              className="inline-block px-4 py-1 text-xs tracking-widest uppercase mb-3"
              style={{ fontFamily: 'var(--bb-font-body)', color: line.color, border: `1px solid ${line.color}` }}
            >
              {line.badge}
            </span>
            <h2
              className="text-bb-noir text-3xl font-light mb-2"
              style={{ fontFamily: 'var(--bb-font-heading)' }}
            >
              {line.tagline}
            </h2>
            <p
              className="text-bb-rose-dark text-sm max-w-lg mx-auto"
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              {line.description}
            </p>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {line.items.map((p) => (
              <div
                key={p.id}
                className="group bg-white border border-bb-rose-light hover:border-bb-rose hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span
                    className="absolute top-2 left-2 px-2 py-0.5 text-[9px] tracking-widest uppercase text-white"
                    style={{ fontFamily: 'var(--bb-font-body)', backgroundColor: line.color }}
                  >
                    {line.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3
                    className="text-bb-noir text-base font-light tracking-wide mb-2 leading-snug"
                    style={{ fontFamily: 'var(--bb-font-heading)' }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="text-bb-rose-dark text-xs leading-relaxed mb-4"
                    style={{ fontFamily: 'var(--bb-font-body)' }}
                  >
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-bb-rose-light">
                    <span
                      className="text-bb-noir text-base font-light"
                      style={{ fontFamily: 'var(--bb-font-heading)' }}
                    >
                      {p.price}
                    </span>
                    <a
                      href="/#reservar"
                      className="px-3 py-1.5 text-[9px] tracking-[0.2em] uppercase border border-bb-noir text-bb-noir hover:bg-bb-noir hover:text-white transition-all duration-300"
                      style={{ fontFamily: 'var(--bb-font-body)' }}
                    >
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Volver */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block px-10 py-4 border border-bb-noir text-bb-noir hover:bg-bb-noir hover:text-white text-xs tracking-[0.3em] uppercase transition-all duration-300"
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              ← Volver al Inicio
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
