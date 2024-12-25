import React from 'react';
import { Bot, Palette, Globe } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'ai',
    title: 'IA Avançada',
    description: 'Utilize o poder combinado do ChatGPT, CommercePro e Bolt para criar conteúdo e soluções inovadoras.',
    icon: 'Bot'
  },
  {
    id: 'design',
    title: 'Design Avançado',
    description: 'Crie designs profissionais com nossa plataforma inspirada no Canva, com recursos exclusivos.',
    icon: 'Palette'
  },
  {
    id: 'websites',
    title: 'Sites Empresariais',
    description: 'Desenvolva sites profissionais para e-commerce, serviços e muito mais com nossos templates personalizáveis.',
    icon: 'Globe'
  }
];

const IconMap = {
  Bot,
  Palette,
  Globe
};

export const Services: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon as keyof typeof IconMap];
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8">
                <Icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};