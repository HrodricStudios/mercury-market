// components/AosInit.js
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,    // duración de la animación en ms
      once: false,      // `true` para que solo se anime una vez
      easing: 'ease-out-quart',
    });
  }, []);

  return null; // no renderiza nada visible
}