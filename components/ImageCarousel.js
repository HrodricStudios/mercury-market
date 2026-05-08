// components/ImageCarousel.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ImageCarousel({ images }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper rounded-xl overflow-hidden shadow-2xl"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[300px] md:h-[500px] w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-6">
              <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                {img.label}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}