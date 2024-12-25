import React from 'react';
import { CheckCircle } from 'lucide-react';

export const SuccessMessage: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Solicitação Recebida!</h2>
        <p className="text-gray-600 mb-6">
          A equipe infinity irá analisar a solicitação do plano, em até 24 horas seu acesso será liberado
          e você poderá utilizar nossos serviços! Por favor aguarde, iremos retornar sua solicitação no email.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
};