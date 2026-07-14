import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Mentoría', href: '#mentoria' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20 px-4 md:px-6 py-6">
      <nav className="liquid-glass rounded-full max-w-4xl mx-auto px-5 md:px-6 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center text-gold font-serif italic text-base">
            AI
          </span>
          <span className="text-white font-semibold text-sm md:text-base tracking-tight hidden sm:inline">
            Agustina Idiart Troglia
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 ml-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://instagram.com/holasoyaguusabogada"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Instagram
          </a>
          <a
            href="#contacto"
            className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Consulta Gratuita
          </a>
        </div>

        <button className="md:hidden text-white p-1" onClick={() => setOpen((o) => !o)} aria-label="Abrir menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden liquid-glass rounded-3xl max-w-4xl mx-auto mt-2 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white text-lg font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="w-full h-px bg-white/10 my-1" />
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="text-center liquid-glass rounded-full px-6 py-3 text-white text-sm font-semibold"
          >
            Consulta Gratuita
          </a>
        </div>
      )}
    </div>
  );
}
