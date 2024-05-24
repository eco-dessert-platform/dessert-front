import { SelectedBadgeType } from '@/domains/review/types/badge';
import { RatingType } from '@/domains/review/types/starRating';

export interface Review {
  id: string;
  images: string[];
  nickname: string;
  isBest: boolean;
  tags: string[];
  like: number;
  isLiked: boolean;
  comment: string;
  date: string;
  rating: RatingType;
}

export interface ReviewDataType {
  badges: Partial<SelectedBadgeType>;
  rate: RatingType;
  content: string;
  photos: Array<string>;
}
