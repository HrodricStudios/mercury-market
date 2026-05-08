// app/page.js
import Image from 'next/image';
import HeroVideo from '@/components/HeroVideo';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fondo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenido a Mercury Market
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-light">
            Tu mercado de cercanía con los productos más frescos y el mejor servicio.
          </p>
          <a
            href="#categorias"
            className="inline-block bg-white text-mercury border-2 border-white hover:bg-mercury hover:text-white transition px-8 py-4 rounded-md font-semibold text-lg uppercase tracking-wider"
          >
            Explorar mercado
          </a>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div data-aos="fade-up">
            <FeatureCard icon="🥦" title="Productos Frescos" description="Frutas y verduras seleccionadas a diario de productores locales." />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <FeatureCard icon="🌿" title="Orgánicos & Saludables" description="Amplia gama de productos orgánicos, sin conservantes." />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <FeatureCard icon="🤝" title="Atención Personalizada" description="Estamos para asesorarte en cada compra y recordar tus gustos." />
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-mercury mb-6">Una tradición de sabor y calidad</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              En Mercury Market llevamos 5 años acercando a tu mesa los mejores productos.
              Trabajamos con pequeños productores y marcas artesanales para ofrecerte una experiencia
              de compra auténtica, donde la frescura y el trato cercano marcan la diferencia.
            </p>
            <a href="#categorias" className="inline-block border-2 border-mercury text-mercury hover:bg-mercury hover:text-white transition px-6 py-3 rounded-md font-semibold uppercase text-sm tracking-wider">
              Ver categorías
            </a>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg" data-aos="fade-left">
            <Image src="/images/relax.jpg" alt="Ambiente relajado en Mercury Market" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-mercury mb-12" data-aos="fade-up">
          Nuestras categorías
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div data-aos="zoom-in" data-aos-delay="100">
            <CategoryCard
              title="Góndola"
              image="/images/gondola.jpg"
              items="Productos de almacén"
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <CategoryCard
              title="Vinos"
              image="/images/vinos.jpg"
              items="Selección de bodegas"
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <CategoryCard
              title="Fiambres"
              image="/images/fiambres.jpg"
              items="Quesos y embutidos"
            />
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-mercury py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10" data-aos="fade-up">
            Así se vive Mercury Market
          </h2>
          <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <HeroVideo
              videoSrc="/videos/mercury.mp4"
              posterSrc="/images/portadavideo.jpg"
              alt="Productos Mercury Market"
            />
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12">
        <div data-aos="fade-right">
          <div className="bg-mercury inline-block px-5 py-2 rounded-full mb-4">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              ⭐ Ubicación privilegiada
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-mercury mb-6">
            Estamos donde vos estás
          </h2>
          <p className="text-gray-700 mb-4 flex items-start gap-2">
            <FaMapMarkerAlt className="text-mercury mt-1" size={20} />
            <span><strong>Dirección:</strong> Córdoba 667, Rosario, Santa Fe</span>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Horarios:</strong> Lunes a sábado de 8:00 a 20:00 hs. Domingos de 9:00 a 14:00 hs.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="https://wa.me/5493415483446" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-white hover:bg-green-600 border-2 border-green-600 rounded-full p-2 transition" aria-label="WhatsApp">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://www.instagram.com/mercurymarket667/" target="_blank" rel="noopener noreferrer" className="text-mercury hover:text-white hover:bg-mercury border-2 border-mercury rounded-full p-2 transition" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
          <a href="https://www.google.com/maps?q=C%C3%B3rdoba+667+Rosario+Santa+Fe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-mercury text-mercury hover:bg-mercury hover:text-white transition px-6 py-3 rounded-md font-semibold uppercase text-sm tracking-wider">
            <FaMapMarkerAlt />
            Cómo llegar
          </a>
        </div>
        <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-lg" data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.867487432654!2d-60.63912368481393!3d-32.94680098092482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab0656f8bfb7%3A0x8c5a5b5a5b5a5b5a!2sC%C3%B3rdoba%20667%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1610000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa de Mercury Market"
          ></iframe>
        </div>
      </section>

      {/* Sección final */}
      <section className="bg-mercury py-16 md:py-24 text-center text-white px-4" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Gracias por visitarnos</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
          Te esperamos en nuestro local o seguinos en redes para conocer las novedades.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://www.instagram.com/mercurymarket667/" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-mercury transition uppercase tracking-wider inline-flex items-center gap-2">
            <FaInstagram />
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}

/* ---- Componentes auxiliares ---- */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-mercury mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CategoryCard({ title, image, items }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{items}</p>
      </div>
    </div>
  );
}