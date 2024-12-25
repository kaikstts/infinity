import React from 'react';
import { Check } from 'lucide-react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: 'daily',
    name: 'Diário',
    price: 5.49,
    period: 'dia',
    checkoutUrl: 'https://mpago.la/1TDXuY8',
    features: [
      'Acesso a todas as ferramentas',
      'Suporte 24/7',
      'Duração de 24 horas'
    ]
  },
  {
    id: 'weekly',
    name: 'Semanal',
    price: 18.78,
    period: 'semana',
    checkoutUrl: 'https://mpago.la/2uNuB2J',
    features: [
      'Acesso a todas as ferramentas',
      'Suporte 24/7',
      'Duração de 7 dias',
      'Economia de 51%'
    ]
  },
  {
    id: 'monthly',
    name: 'Mensal',
    price: 56.22,
    period: 'mês',
    checkoutUrl: 'https://mpago.la/2Mg7www',
    features: [
      'Acesso a todas as ferramentas',
      'Suporte 24/7',
      'Duração de 30 dias',
      'Economia de 66%',
      'Prioridade no suporte'
    ]
  }
];

export const PricingPlans: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Escolha seu plano</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ {plan.price}</span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.checkoutUrl}
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Começar agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};