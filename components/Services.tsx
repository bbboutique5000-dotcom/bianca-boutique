import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Depilación con Hilo',
    description:
      'Técnica de precisión milenaria para eliminar el vello facial. Diseño de cejas, labios, barbilla, cara completa y más. Resultados limpios y duraderos.',
    img: '/images/brow-threading.png',
    duration: '2 – 30 min',
    desde: 'Desde 1 €',
  },
  {
    id: 2,
    title: 'Lifting de Pestañas',
    description:
      'Eleva y riza tus pestañas naturales con resultado duradero hasta 8 semanas. Disponible en versión tradicional, fusión y coreana para cada tipo de pestaña.',
    img: '/images/service-lift.png',
    duration: '45 – 90 min',
    desde: 'Desde 40 €',
  },
  {
    id: 3,
    title: 'Laminado de Cejas',
    description:
      'Define y fija tus cejas con efecto peinado y lleno. Laminado tradicional o coreano para un resultado natural, denso y de larga duración.',
    img: '/images/extension-pestanas.jpg',
    duration: '20 – 35 min',
    desde: 'Desde 45 €',
  },
  {
    id: 4,
    title: 'Henna de Cejas',
    description:
      'Coloración natural con henna de larga duración, sola o combinada con diseño de cejas para un resultado completo, definido y de aspecto saludable.',
    img: '/images/gallery-05.jpg',
    duration: '20 – 35 min',
    desde: 'Desde 20 €',
  },
  {
    id: 5,
    title: 'Tinte de Cejas y Pestañas',
    description:
      'Intensifica el color y la profundidad de tu mirada con tinte de larga duración. Tratamiento rápido, eficaz y sin mantenimiento diario.',
    img: '/images/service-tint.png',
    duration: '8 – 10 min',
    desde: '12 €',
  },
  {
    id: 6,
    title: 'Tratamientos Faciales',
    description:
      'Limpieza facial, Microshading, Glossyps e Hidrolips. Técnicas premium para el cuidado, definición y embellecimiento de tu rostro.',
    img: '/images/facial.png',
    duration: '30 – 120 min',
    desde: 'Desde 50 €',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#FCFAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-[#745E73] text-xs tracking-[0.4em] uppercase block mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Estudio de Belleza · Madrid
          </span>
          <h2
            className="text-[#513550] text-4xl md:text-5xl font-light tracking-wide mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Nuestros Servicios
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#D3BCC5]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D3BCC5]" />
            <div className="h-px w-12 bg-[#D3BCC5]" />
          </div>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-white border border-[#EBE1E5] hover:border-[#D3BCC5] hover:shadow-xl transition-all duration-400 overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#513550]/20 group-hover:bg-[#513550]/10 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3
                  className="text-[#513550] text-xl mb-3 font-light tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[#745E73] text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {s.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#EBE1E5]">
                  <span
                    className="text-[#745E73] text-xs tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    ⏱ {s.duration}
                  </span>
                  <span
                    className="text-[#513550] text-sm font-medium tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {s.desde}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#reservar" className="btn-primary">
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
