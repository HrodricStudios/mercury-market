// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1 – Marca */}
        {/* Columna 1 – Logo + descripción */}
<div>
  <div className="flex items-center gap-4 mb-4">
    <Link href="/" className="flex-shrink-0">
      <Image
        src="/images/logofooter.jpg"
        alt="Mercury Market"
        width={40}        // ajustá si lo querés más chico aún
        height={15}
        className="h-auto w-auto rounded-lg"
      />
    </Link>
    <p className="text-sm leading-snug">
      Tu mercado de cercanía
      <br />
      con los productos más frescos.
    </p>
  </div>
</div>

        {/* Columna 2 – Contacto */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-mercury" />
              Córdoba 667, Rosario, Santa Fe
            </p>
            <a
              href="https://wa.me/5493415483446"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FaWhatsapp className="text-green-500" />
              +54 9 341 548-3446
            </a>
          </div>
        </div>

        {/* Columna 3 – Redes */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Seguinos</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mercurymarket667/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.google.com/maps/place/Mercury+Market/@-32.94785,-60.6427311,15z/data=!4m10!1m2!2m1!1smercury+market!3m6!1s0x95b7ab63de959c65:0x9c2e49b30fbc81f9!8m2!3d-32.9477126!4d-60.6322899!15sCg5tZXJjdXJ5IG1hcmtldJIBBm1hcmtldOABAA!16s%2Fg%2F11nnv5hwbm?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Google Maps"
            >
              <FaMapMarkerAlt size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>© 2026 Mercury Market. Todos los derechos reservados.</p>
        <p className="text-gray-500 text-xs mt-1">
            Desarrollado por{" "}
            <a
            href="https://github.com/HrodricStudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            >
            Hrodric Studios
            </a>
        </p>
      </div>
    </footer>
  );
}