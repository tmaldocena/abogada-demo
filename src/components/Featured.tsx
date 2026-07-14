import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FEATURED_IMG } from './images';

export default function Featured() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-ink pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative aspect-video"
      >
        <img src={FEATURED_IMG} alt="Estudio jurídico de Agustina Idiart Troglia" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md">
            <p className="text-gold/70 text-xs tracking-widest uppercase mb-3">Nuestro Enfoque</p>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Cada proceso migratorio es distinto. Analizamos tu perfil, tus tiempos y tus objetivos antes
              de armar la estrategia legal que mejor te represente.
            </p>
          </div>

          <a
            href="#servicios"
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors self-start md:self-end"
          >
            Ver Servicios
          </a>
        </div>
      </motion.div>
    </section>
  );
}
