import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-ink pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,75,0.05)_0%,_transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gold/70 text-sm tracking-widest uppercase mb-6"
        >
          Sobre mí
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] tracking-tight font-serif"
        >
          <span className="italic text-white/60">Migrar</span> es un derecho,
          <br className="hidden md:block" /> no un <span className="italic text-white/60">privilegio</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
        >
          Hace más de 9 años acompaño procesos migratorios, consulares y judiciales. Analizo cada perfil
          en profundidad para evitar rechazos y construir el camino legal más seguro hacia tu residencia.
        </motion.p>
      </div>
    </section>
  );
}
