import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Extensiones de Pestañas',
    description:
      'Realza tu mirada con extensiones aplicadas una a una. Resultado natural o dramático según tu estilo, con materiales hipoalergénicos de primera calidad.',
    img: '/images/extension-pestanas.jpg',
    duration: '90 – 120 min',
    desde: 'Desde 80 €',
  },
  {
    id: 2,
    title: 'Diseño de Cejas',
    description:
      'Enmarcamos tu rostro con la forma perfecta para tus cejas mediante hilo, cera o pinzas. Definición precisa para una mirada más expresiva.',
    img: '/images/brow-threading.png',
    duration: '30 – 45 min',
    desde: 'Desde 25 €',
  },
  {
    id: 3,
    title: 'Maquillaje Semipermanente',
    description:
      'Despiértate perfecta cada día. Aplicamos pigmentos de larga duración en cejas, eyeliner o labios para un look impecable sin esfuerzo diario.',
    img: '/images/gallery-09.jpg',
    duration: '90 – 120 min',
    desde: 'Desde 150 €',
  },
  {
    id: 4,
    title: 'La Experiencia Facial Bianca',
    description:
      'Un tratamiento facial exclusivo diseñado para nutrir, iluminar y rejuvenecer tu piel. Te llevamos a un estado de relajación profunda mientras cuidamos tu rostro.',
    img: '/images/facial.png',
    duration: '60 – 75 min',
    desde: 'Desde 70 €',
  },
  {
    id: 5,
    title: 'Servicios de Tinte',
    description:
      'Intensifica el color de tus pestañas o cejas con tintes de larga duración. Ideal como complemento al lifting o al diseño de cejas.',
    img: '/images/service-tint.png',
    duration: '20 – 30 min',
    desde: 'Desde 20 €',
  },
  {
    id: 6,
    title: 'Lifting & Laminado de Cejas',
    description:
      'Eleva y fija tus pestañas naturales con un lifting duradero hasta 8 semanas, y define tus cejas con laminado profesional para un efecto peinado y lleno.',
    img: '/images/service-lift.png',
    duration: '60 – 90 min',
    desde: 'Desde 55 €',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-bb-ivory">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-bb-rose-dark text-xs tracking-[0.4em] uppercase block mb-4"
            style={{ fontFamily: 'var(--bb-font-body)' }}
          >
            Estudio de Belleza · Madrid
          </span>
          <h2
            className="text-bb-noir text-4xl md:text-5xl font-light tracking-wide mb-6"
            style={{ fontFamily: 'var(--bb-font-heading)' }}
          >
            Nuestros Servicios
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-bb-rose" />
            <div className="w-1.5 h-1.5 rounded-full bg-bb-rose" />
            <div className="h-px w-12 bg-bb-rose" />
          </div>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-white border border-bb-rose-light hover:border-bb-rose hover:shadow-xl transition-all duration-400 overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-bb-noir/20 group-hover:bg-bb-noir/10 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3
                  className="text-bb-noir text-xl mb-3 font-light tracking-wide"
                  style={{ fontFamily: 'var(--bb-font-heading)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-bb-rose-dark text-sm leading-relaxed mb-5"
                  style={{ fontFamily: 'var(--bb-font-body)' }}
                >
                  {s.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-bb-rose-light">
                  <span
                    className="text-bb-rose-dark text-xs tracking-wide"
                    style={{ fontFamily: 'var(--bb-font-body)' }}
                  >
                    ⏱ {s.duration}
                  </span>
                  <span
                    className="text-bb-noir text-sm font-medium tracking-wide"
                    style={{ fontFamily: 'var(--bb-font-body)' }}
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
          <a href="#reservar" className="bb-btn-primary">
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
