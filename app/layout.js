// app/layout.js
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AosInit from '@/components/AosInit';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800 antialiased">
        <AosInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Mercury Market | Tu mercado de confianza',
  description: 'Productos frescos, orgánicos y delivery rápido. Visita Mercury Market en el corazón del barrio.',
};