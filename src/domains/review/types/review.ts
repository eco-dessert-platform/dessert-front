import { SelectedBadgeType } from '@/domains/review/types/badge';
import { RatingType } from '@/domains/review/types/starRating';

export interface ReviewDataType {
  badges: SelectedBadgeType;
  rate: RatingType;
  content: string;
  photos: Array<string>;
}
