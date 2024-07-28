import { PLACEMENT } from '@/shared/constants/tooltip';

export type PlacementType = (typeof PLACEMENT)[number];

export type PolygonPositionType = { top?: number; bottom?: number; left?: number; right?: number };
