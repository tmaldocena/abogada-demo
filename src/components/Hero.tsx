import { MessageCircle, Globe } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import Navbar from './Navbar';
import { HERO_BG } from './images';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen overflow-hidden relative flex flex-col">
      <video
        src={HERO_BG}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />

      <Navbar />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center gap-8">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-cream text-xs md:text-sm font-medium tracking-wide">
          100% virtual · Todo el país y el exterior
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] font-serif max-w-4xl">
          Migrá, con <em className="italic text-gold">certeza</em>.
        </h1>

        <p className="max-w-xl text-white/70 text-sm md:text-base leading-relaxed px-4">
          Asesoramiento migratorio integral para nómades digitales, trabajadores remotos y quienes buscan
          estudiar o migrar a Estados Unidos. Acompañamiento personalizado, de principio a fin.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contacto"
            className="bg-white rounded-full px-8 py-3.5 text-ink text-sm font-semibold hover:bg-cream transition-colors"
          >
            Agendar Consulta Gratuita
          </a>
          <a
            href="#proceso"
            className="liquid-glass rounded-full px-8 py-3.5 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Conocé mi enfoque
          </a>
        </div>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="https://instagram.com/holasoyaguusabogada"
          target="_blank"
          rel="noreferrer"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          aria-label="Instagram"
        >
          <InstagramIcon size={20} />
        </a>
        <a
          href="#contacto"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </section>
  );
}
