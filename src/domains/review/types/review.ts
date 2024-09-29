import { SelectedBadgeType } from '@/domains/review/types/badge';
import { RatingType } from '@/domains/review/types/starRating';

export interface ReviewPhoto {
  id: number;
  url: string;
}

export interface ReviewType {
  id: number;
  boardId: number;
  images: Array<ReviewPhoto> | null;
  nickname: string;
  isBest: boolean;
  tags: string[];
  like: number;
  isLiked: boolean;
  comment: string;
  date: string;
  rating: RatingType;
  isMine: boolean;
}

export interface BoardReviewRateResponse {
  rating: number;
  count: number;
  taste: {
    good: number;
    bad: number;
  };
  brix: {
    sweet: number;
    plain: number;
  };
  texture: {
    soft: number;
    dry: number;
  };
}

export interface IReviewWriteForm {
  badges: SelectedBadgeType;
  rate: RatingType;
  content: string;
  boardId: number;
  images: {
    files?: FileList;
    urls?: string[];
  };
}

export interface CreatReviewRequest {
  badges: string[];
  rate: RatingType;
  content: string;
  urls: string[] | null;
  boardId: number;
}
