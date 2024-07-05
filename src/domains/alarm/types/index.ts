export type AlarmType = 'bbangcketing' | 'restock';

export interface ProductType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  isAlarming: boolean;
}
