import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Expanda seu negócio com Inteligência Artificial
          </h1>
          <p className="text-xl mb-8">
            Somos uma agência tecnológica que utiliza o poder da IA para impulsionar
            o crescimento do seu negócio com soluções inovadoras e eficientes.
          </p>
          <a
            href="#plans"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Comece Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};