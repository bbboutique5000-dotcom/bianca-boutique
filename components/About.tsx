import Image from 'next/image';

const stats = [
  { value: '10+', label: 'Años de Experiencia' },
  { value: '3.000+', label: 'Clientas Satisfechas' },
  { value: '100%', label: 'Satisfacción Garantizada' },
  { value: '6',    label: 'Servicios Especializados' },
];

export default function About() {
  return (
    <section id="nosotras" className="py-24 bg-bb-rose-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Historia de Bianca */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="relative h-[520px] w-full">
              <Image
                src="/images/sobre-mi.jpg"
                alt="Bianca — Artista y Experta en Belleza"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Tarjeta flotante */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-bb-noir text-white px-8 py-6 shadow-xl">
              <p
                className="text-3xl font-light mb-1"
                style={{ fontFamily: 'var(--bb-font-heading)' }}
              >
                Desde 2014
              </p>
              <p
                className="text-bb-rose text-xs tracking-widest uppercase"
                style={{ fontFamily: 'var(--bb-font-body)' }}
              >
                Arte & Pasión
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <span
              className="text-bb-rose-dark text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              Acerca de mí
            </span>
            <h2
              className="text-bb-noir text-4xl md:text-5xl font-light tracking-wide mb-6 leading-tight"
              style={{ fontFamily: 'var(--bb-font-heading)' }}
            >
              Más que una Artista,<br />
              <span className="italic">una Transformación</span>
            </h2>
            <div className="h-px w-16 bg-bb-rose mb-8" />

            <p
              className="text-bb-noir/80 leading-relaxed mb-5 text-base"
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              Soy Bianca, artista especializada en belleza ocular y tratamientos faciales
              en Madrid, con más de <strong>10 años de experiencia</strong> dedicados en cuerpo y alma
              a realzar la belleza natural de cada mujer. Lo que comenzó como una pasión
              silenciosa en mi habitación, se convirtió con los años en un oficio de precisión
              y un compromiso inquebrantable con la excelencia.
            </p>
            <p
              className="text-bb-noir/80 leading-relaxed mb-5 text-base"
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              A lo largo de mi carrera he tenido el privilegio de transformar más de
              3.000 miradas, trabajando con extensiones de pestañas, lifting, laminado
              de cejas, maquillaje semipermanente y tratamientos faciales exclusivos.
              Cada clienta que se sienta en mi silla recibe atención personalizada,
              porque para mí no existen dos miradas iguales.
            </p>
            <p
              className="text-bb-noir/80 leading-relaxed mb-8 text-base"
              style={{ fontFamily: 'var(--bb-font-body)' }}
            >
              Mi filosofía es simple: <em>calidad sin concesiones y satisfacción garantizada.</em>{' '}
              Utilizo exclusivamente productos premium hipoalergénicos y técnicas certificadas
              internacionalmente para que cada resultado no solo sea bello, sino también
              seguro y duradero.
            </p>

            <a href="#reservar" className="bb-btn-secondary">
              Reserva tu Cita
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bb-rose">
          {stats.map((s) => (
            <div key={s.label} className="bg-bb-rose-light text-center py-10 px-4">
              <p
                className="text-bb-noir text-4xl font-light mb-2"
                style={{ fontFamily: 'var(--bb-font-heading)' }}
              >
                {s.value}
              </p>
              <p
                className="text-bb-rose-dark text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: 'var(--bb-font-body)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
