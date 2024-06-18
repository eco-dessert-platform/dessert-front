export type AlarmType = 'bbangketing' | 'restock';

export interface ProductType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  isAlarming: boolean;
}
