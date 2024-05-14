import BADGE from '@/domains/review/constants/badge';

export type BadgeKindType = 'preference' | 'taste' | 'texture';
export type BadgeShapeType = keyof typeof BADGE;
