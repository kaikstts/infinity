import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Bot, Palette, Globe, Layout } from 'lucide-react';

const slides = [
  {
    icon: Bot,
    title: 'IA Avançada',
    description: 'Combine o poder do ChatGPT, CommercePro e Bolt para criar conteúdo único'
  },
  {
    icon: Palette,
    title: 'Design Profissional',
    description: 'Crie designs incríveis com nossa plataforma inspirada no Canva'
  },
  {
    icon: Layout,
    title: 'Sites Personalizados',
    description: 'Desenvolva seu site empresarial com templates exclusivos'
  },
  {
    icon: Globe,
    title: 'E-commerce Completo',
    description: 'Monte sua loja virtual com todas as funcionalidades necessárias'
  }
];

export const ServiceSlider = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="py-8"
        >
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center h-full">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-gray-600">{slide.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};