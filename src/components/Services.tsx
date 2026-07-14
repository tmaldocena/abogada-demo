import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICE_MIGRATION_IMG, SERVICE_MENTORSHIP_IMG } from './images';

const services = [
  {
    tag: 'Migración',
    title: 'Visas y Residencia',
    description:
      'Visa Nómade Digital, Visa de Estudio, Visas B1/B2 para Estados Unidos y Cambio de Estatus Migratorio. Análisis de perfil y acompañamiento de principio a fin.',
    image: SERVICE_MIGRATION_IMG,
  },
  {
    tag: 'Mentoría',
    title: 'Formación Legal',
    description:
      'Programa de mentoría 1:1 para abogados y abogadas que quieren especializarse en derecho migratorio y construir su propia práctica.',
    image: SERVICE_MENTORSHIP_IMG,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="bg-ink py-28 md:py-40 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,75,0.04)_0%,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight font-serif">Qué hago</h2>
          <span className="hidden md:inline text-white/40 text-sm">Mis servicios</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="liquid-glass rounded-3xl overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-gold/70 text-xs tracking-widest uppercase">{svc.tag}</span>
                  <span className="liquid-glass rounded-full p-2 text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3 className="text-white text-xl md:text-2xl tracking-tight mb-3 font-serif">{svc.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{svc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
