// components/Navbar.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-mercury shadow-md">
      {/* Altura aumentada 50%: h-24 (6rem) en lugar de h-16 (4rem) */}
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 h-full flex items-center">
            <Image
                src="/images/logo.jpg"
                alt="Mercury Market"
                width={180}
                height={72}
                className="max-h-[70%] w-auto"
                priority
            />
        </Link>

        {/* Enlaces de escritorio (textos más grandes para acompañar la altura) */}
        <div className="hidden md:flex items-center gap-16 text-white font-medium text-lg">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-mercury-200 transition">Inicio</a>          <a href="#categorias" className="hover:text-mercury-200 transition">Categorías</a>
          <a href="#contacto" className="hover:text-mercury-200 transition">Contacto</a>
          <a
            href="https://www.instagram.com/mercurymarket667/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-mercury-200 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://wa.me/5493415483446"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>

        {/* Botón hamburguesa (móvil) más grande */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-mercury-700 border-t border-mercury-600 px-4 pb-4 pt-2 space-y-3 text-lg">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} className="block text-white hover:text-mercury-200 py-2 cursor-pointer">Inicio</a>
          <a href="#categorias" className="block text-white hover:text-mercury-200 py-2" onClick={() => setMenuOpen(false)}>
            Categorías
          </a>
          <a href="#contacto" className="block text-white hover:text-mercury-200 py-2" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
          <div className="flex gap-4 pt-2">
            <a href="https://www.instagram.com/mercurymarket667/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mercury-200">
              <FaInstagram size={22} />
            </a>
            <a href="https://wa.me/5493415483446" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}