import Image from 'next/image';

const stats = [
  { value: '10+', label: 'Años de Experiencia' },
  { value: '3.000+', label: 'Clientas Satisfechas' },
  { value: '100%', label: 'Satisfacción Garantizada' },
  { value: '6',    label: 'Servicios Especializados' },
];

export default function About() {
  return (
    <section id="nosotras" className="py-24 bg-[#EBE1E5]">
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
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#513550] text-white px-8 py-6 shadow-xl">
              <p
                className="text-3xl font-light mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Desde 2014
              </p>
              <p
                className="text-[#D3BCC5] text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Arte & Pasión
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <span
              className="text-[#745E73] text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Acerca de mí
            </span>
            <h2
              className="text-[#513550] text-4xl md:text-5xl font-light tracking-wide mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Más que una Artista,<br />
              <span className="italic">una Transformación</span>
            </h2>
            <div className="h-px w-16 bg-[#D3BCC5] mb-8" />

            <p
              className="text-[#513550]/80 leading-relaxed mb-5 text-base"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Soy Bianca, artista especializada en belleza ocular y tratamientos faciales
              con más de <strong>10 años de experiencia</strong> dedicados en cuerpo y alma
              a realzar la belleza natural de cada mujer. Lo que comenzó como una pasión
              silenciosa en mi habitación, se convirtió con los años en un oficio de precisión
              y un compromiso inquebrantable con la excelencia.
            </p>
            <p
              className="text-[#513550]/80 leading-relaxed mb-5 text-base"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              A lo largo de mi carrera he tenido el privilegio de transformar más de
              3.000 miradas, trabajando con extensiones de pestañas, lifting, laminado
              de cejas, maquillaje semipermanente y tratamientos faciales exclusivos.
              Cada clienta que se sienta en mi silla recibe atención personalizada,
              porque para mí no existen dos miradas iguales.
            </p>
            <p
              className="text-[#513550]/80 leading-relaxed mb-8 text-base"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Mi filosofía es simple: <em>calidad sin concesiones y satisfacción garantizada.</em>{' '}
              Utilizo exclusivamente productos premium hipoalergénicos y técnicas certificadas
              internacionalmente para que cada resultado no solo sea bello, sino también
              seguro y duradero.
            </p>

            <a
              href="#reservar"
              className="inline-block px-8 py-3 border border-[#513550] text-[#513550] hover:bg-[#513550] hover:text-white text-xs tracking-[0.25em] uppercase transition-all duration-300"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Reserva tu Cita
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D3BCC5]">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#EBE1E5] text-center py-10 px-4">
              <p
                className="text-[#513550] text-4xl font-light mb-2"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {s.value}
              </p>
              <p
                className="text-[#745E73] text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: "'Lato', sans-serif" }}
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
