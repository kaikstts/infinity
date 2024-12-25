import React from 'react';
import { Instagram } from 'lucide-react';

export const InstagramCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12">
      <div className="container mx-auto px-4 text-center">
        <a
          href="https://www.instagram.com/infinity360_gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-white hover:text-white/90 transition-colors"
        >
          <Instagram className="h-8 w-8" />
          <span className="text-2xl font-bold">Siga a Infinity no Instagram</span>
        </a>
      </div>
    </section>
  );
};