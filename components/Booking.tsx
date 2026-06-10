'use client';

import { useState } from 'react';

const generarHoras = (desde: number, hasta: number) => {
  const slots: string[] = [];
  for (let h = desde; h < hasta; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`);
    slots.push(`${String(h).padStart(2, '0')}:30`);
  }
  return slots;
};

const horasLaborables = generarHoras(10, 20); // Lun–Vie: 10:00–19:30
const horasSabado     = generarHoras(10, 18); // Sáb: 10:00–17:30

const getHorasDisponibles = (fecha: string) => {
  if (!fecha) return horasLaborables;
  const dia = new Date(fecha).getUTCDay(); // 0=Dom, 6=Sáb
  if (dia === 0) return [];       // Domingo cerrado
  if (dia === 6) return horasSabado;
  return horasLaborables;
};

const servicios = [
  'Extensiones de Pestañas',
  'Diseño de Cejas',
  'Maquillaje Semipermanente',
  'La Experiencia Facial Bianca',
  'Servicios de Tinte',
  'Lifting & Laminado de Cejas',
];

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  fecha: string;
  hora: string;
  mensaje: string;
};

export default function Booking() {
  const [form, setForm] = useState<FormState>({
    nombre: '', email: '', telefono: '', servicio: '', fecha: '', hora: '', mensaje: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => { const next = { ...prev }; delete next[name]; delete next.contacto; return next; });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.nombre.trim()) errs.nombre = 'El nombre es obligatorio';
    if (!form.email.trim() && !form.telefono.trim())
      errs.contacto = 'Indica al menos un email o un teléfono';
    if (!form.servicio) errs.servicio = 'Selecciona un servicio';
    if (!form.fecha) errs.fecha = 'La fecha es obligatoria';
    if (!form.hora) errs.hora = 'La hora es obligatoria';
    return errs;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setServerError(false);
    try {
      const res = await fetch('https://formspree.io/f/xykvrvwr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nombre: form.nombre,
          Email: form.email || '—',
          Teléfono: form.telefono || '—',
          Servicio: form.servicio,
          'Fecha preferida': form.fecha || '—',
          'Hora preferida': form.hora || '—',
          Mensaje: form.mensaje || '—',
        }),
      });
      if (res.ok) setSent(true); else setServerError(true);
    } catch { setServerError(true); }
    finally { setLoading(false); }
  };

  const inputClass = (name: string) => {
    const hasError = errors[name] || ((name === 'email' || name === 'telefono') && errors.contacto);
    return hasError ? 'form-input error' : 'form-input';
  };

  return (
    <section id="reservar" className="py-24 bg-[#513550]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info izquierda */}
          <div>
            <span
              className="text-[#D3BCC5] text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Pide tu cita
            </span>
            <h2
              className="text-white text-4xl md:text-5xl font-light tracking-wide mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Reserva tu<br />
              <span className="italic text-[#D3BCC5]">Experiencia</span>
            </h2>
            <div className="h-px w-16 bg-[#D3BCC5]/50 mb-8" />
            <p
              className="text-[#EBE1E5] leading-relaxed mb-10 text-base"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Rellena el formulario y nos pondremos en contacto contigo en menos
              de 24 horas para confirmar tu cita. También puedes llamarnos o
              escribirnos directamente por WhatsApp.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                  label: 'Teléfono / WhatsApp',
                  value: '+34 600 000 000',
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  label: 'Email',
                  value: 'hola@biancaboutique.es',
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  label: 'Horario',
                  value: 'Lun–Vie: 10:00 – 20:00 · Sáb: 10:00 – 18:00',
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  label: 'Ubicación',
                  value: 'Calle de Serrano, 45, 28001 Madrid',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="text-[#D3BCC5] mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[#D3BCC5] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>{item.label}</p>
                    <p className="text-white text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-[#FCFAFB] p-8 md:p-10">
            {sent ? (
              <div className="text-center py-16">
                <div className="text-[#513550] mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[#513550] text-2xl font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  ¡Solicitud Enviada!
                </h3>
                <p className="text-[#745E73] text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Nos pondremos en contacto contigo en breve para confirmar tu cita.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5">
                <h3 className="text-[#513550] text-2xl font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Solicita tu Cita
                </h3>

                {/* Nombre */}
                <div>
                  <label className="block text-[#745E73] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Nombre <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text" name="nombre" value={form.nombre} onChange={handle}
                    className={inputClass('nombre')} style={{ fontFamily: "'Lato', sans-serif" }}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "'Lato', sans-serif" }}>{errors.nombre}</p>}
                </div>

                {/* Email y Teléfono — al menos uno */}
                <div>
                  <label className="block text-[#745E73] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Contacto <span className="text-red-400">*</span>
                    <span className="normal-case tracking-normal font-normal text-[#745E73]/60 ml-1">— email, teléfono o ambos</span>
                  </label>
                  {errors.contacto && <p className="text-red-400 text-xs mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>{errors.contacto}</p>}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    <input
                      type="email" name="email" value={form.email} onChange={handle}
                      className={inputClass('email')} style={{ fontFamily: "'Lato', sans-serif" }}
                      placeholder="tucorreo@email.com"
                    />
                    <input
                      type="tel" name="telefono" value={form.telefono} onChange={handle}
                      className={inputClass('telefono')} style={{ fontFamily: "'Lato', sans-serif" }}
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                {/* Servicio */}
                <div>
                  <label className="block text-[#745E73] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Servicio <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="servicio" value={form.servicio} onChange={handle}
                    className={`${inputClass('servicio')} appearance-none`} style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.servicio && <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "'Lato', sans-serif" }}>{errors.servicio}</p>}
                </div>

                {/* Fecha + Hora */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#745E73] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Fecha <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="date" name="fecha" value={form.fecha} onChange={handle}
                      className={inputClass('fecha')} style={{ fontFamily: "'Lato', sans-serif" }}
                    />
                    {errors.fecha && <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "'Lato', sans-serif" }}>{errors.fecha}</p>}
                  </div>
                  <div>
                    <label className="block text-[#745E73] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Hora <span className="text-red-400">*</span>
                    </label>
                    {(() => {
                      const horas = getHorasDisponibles(form.fecha);
                      if (form.fecha && horas.length === 0) {
                        return (
                          <p className="text-[#745E73] text-xs py-3 px-4 border border-[#D3BCC5] bg-[#F5EFF1]" style={{ fontFamily: "'Lato', sans-serif" }}>
                            Domingos cerrado. Elige otra fecha.
                          </p>
                        );
                      }
                      return (
                        <select
                          name="hora" value={form.hora} onChange={handle}
                          className={`${inputClass('hora')} appearance-none`}
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          <option value="">Selecciona una hora</option>
                          {horas.map((h) => (
                            <option key={h} value={h}>{h}</option>
                          ))}
                        </select>
                      );
                    })()}
                    {errors.hora && <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "'Lato', sans-serif" }}>{errors.hora}</p>}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-[#745E73] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Mensaje (opcional)
                  </label>
                  <textarea
                    name="mensaje" rows={3} value={form.mensaje} onChange={handle}
                    className={`${inputClass('mensaje')} resize-none`} style={{ fontFamily: "'Lato', sans-serif" }}
                    placeholder="¿Tienes alguna pregunta o preferencia?"
                  />
                </div>

                {serverError && (
                  <p className="text-red-400 text-xs text-center" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Hubo un error al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.
                  </p>
                )}

                <button type="submit" disabled={loading} className="btn-primary w-full">
                  {loading ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-5 h-5 text-[#D3BCC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[#D3BCC5] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
              Cómo llegar — Calle de Serrano, 45, 28001 Madrid
            </span>
          </div>
          <div className="w-full h-72 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8!2d-3.6888!3d40.4296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228f0c3f4b0b1%3A0x6c6d9e5e5e5e5e5e!2sCalle%20de%20Serrano%2C%2045%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
              width="100%" height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Bianca Boutique"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
