// components/Navbar.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-mercury shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo con ancho máximo en mobile */}
        <Link href="/" className="flex-shrink-0 h-full flex items-center">
          <div className="relative h-16 md:h-20 w-[120px] md:w-[180px]">
            <Image
              src="/images/logo.png"
              alt="Mercury Market"
              fill
              sizes="(max-width: 768px) 120px, 180px"
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Enlaces de escritorio */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium text-lg">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-mercury-200 transition cursor-pointer">Inicio</a>
          <a href="#categorias" className="hover:text-mercury-200 transition">Categorías</a>
          <a href="#contacto" className="hover:text-mercury-200 transition">Contacto</a>
          <a href="https://www.instagram.com/mercurymarket667/" target="_blank" rel="noopener noreferrer" className="hover:text-mercury-200 transition">
            <FaInstagram size={22} />
          </a>
          <a href="https://wa.me/5493415483446" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition">
            <FaWhatsapp size={22} />
          </a>
        </div>

        {/* Botón hamburguesa (móvil) con iconos seguros */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-mercury-700 border-t border-mercury-600 px-4 pb-4 pt-2 space-y-3 text-lg">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} className="block text-white hover:text-mercury-200 py-2 cursor-pointer">Inicio</a>
          <a href="#categorias" className="block text-white hover:text-mercury-200 py-2" onClick={() => setMenuOpen(false)}>Categorías</a>
          <a href="#contacto" className="block text-white hover:text-mercury-200 py-2" onClick={() => setMenuOpen(false)}>Contacto</a>
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