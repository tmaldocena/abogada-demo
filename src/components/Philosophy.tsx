import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PHILOSOPHY_IMG } from './images';

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="proceso" ref={ref} className="bg-ink py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 font-serif"
        >
          Migración <span className="italic text-white/40">x</span> Mentoría
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <img src={PHILOSOPHY_IMG} alt="Documentos y proceso migratorio" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="pb-8">
              <p className="text-gold/70 text-xs tracking-widest uppercase mb-4">Para quienes migran</p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Ya sea que quieras vivir y trabajar desde cualquier parte del mundo, estudiar en el
                exterior o iniciar un cambio de estatus migratorio, evaluamos tu perfil para elegir la
                visa correcta desde el primer paso.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div id="mentoria" className="pt-8">
              <p className="text-gold/70 text-xs tracking-widest uppercase mb-4">Para abogados y abogadas</p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                También formo a colegas del derecho que quieren especializarse en migraciones
                internacionales. Mentoría 1:1 para construir tu propia práctica con criterio y
                seguridad.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
