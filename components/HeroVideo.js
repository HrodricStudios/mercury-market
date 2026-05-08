// components/HeroVideo.js
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function HeroVideo({ videoSrc, posterSrc, alt }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intentar reproducir automáticamente
    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        // Si no se puede reproducir automáticamente (ej. navegador bloquea), mostrar portada
        console.log('Reproducción automática bloqueada, se mantiene la portada.');
      }
    };

    playVideo();
  }, []);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
      {/* Imagen de portada (se oculta cuando el video está activo) */}
      {!isPlaying && (
        <div className="absolute inset-0 z-10">
          <Image
            src={posterSrc}
            alt={alt || 'Portada del video'}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover ${isPlaying ? 'z-20' : 'z-0'}`}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}