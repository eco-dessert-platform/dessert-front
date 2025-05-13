import { BADGE } from '@/domains/review/constants/badge';

export type BadgeKindType = 'taste' | 'brix' | 'texture';

export type BadgeShapeType = keyof typeof BADGE;

export interface SelectedBadgeType {
  taste: 'good' | 'bad';
  brix: 'sweet' | 'plain';
  texture: 'soft' | 'dry';
}
