export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  checkoutUrl: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}