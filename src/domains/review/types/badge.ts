import { BADGE } from '@/domains/review/constants/badge';

export type BadgeKindType = 'preference' | 'taste' | 'texture';

export type BadgeShapeType = keyof typeof BADGE;

export interface SelectedBadgeType {
  preference: 'good' | 'bad' | undefined;
  taste: 'sweet' | 'plain' | undefined;
  texture: 'soft' | 'dry' | undefined;
}
