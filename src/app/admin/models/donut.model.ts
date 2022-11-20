export interface Donut {
  id: string;
  name: string;
  icon: string;
  price: number;
  promo?: 'novo' | 'limitado';
  description: string;
}
