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

export interface ReviewCreateForm {
  badges: SelectedBadgeType;
  rate: RatingType;
  content: string;
  boardId: number;
  urls: string[];
}

export interface CreatReviewRequest {
  badges: string[];
  rate: number;
  content: string;
  urls: string[];
  boardId: number;
}
