import { MessageCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-ink px-6 pb-16 pt-8">
      <div className="max-w-4xl mx-auto liquid-glass rounded-3xl px-8 py-12 md:py-16 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-5xl text-white font-serif tracking-tight">
          Empecemos con tu <span className="italic text-gold">consulta</span>.
        </h2>
        <p className="text-white/50 text-sm md:text-base max-w-md">
          Contame tu situación y te digo, sin vueltas, cuál es el mejor camino legal para vos.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#"
            className="bg-white rounded-full px-8 py-3.5 text-ink text-sm font-semibold hover:bg-cream transition-colors flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Escribime por WhatsApp
          </a>
          <a
            href="https://instagram.com/holasoyaguusabogada"
            target="_blank"
            rel="noreferrer"
            className="liquid-glass rounded-full px-8 py-3.5 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            <InstagramIcon size={18} />
            Seguime en Instagram
          </a>
        </div>

        <p className="text-white/30 text-xs mt-8">
          Dra. Ab. Agustina Idiart Troglia · Abogada Migratoria · Argentina
        </p>
      </div>
    </footer>
  );
}
