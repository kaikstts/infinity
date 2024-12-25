import React from 'react';
import { Link } from 'react-router-dom';
import { Infinity } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Infinity className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Infinity</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Serviços</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">Quem Somos</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};