import { atom, selector, DefaultValue } from 'recoil';
import { SelectedBadgeType } from '@/domains/review/types/badge';
import { RatingType } from '@/domains/review/types/starRating';
import { ReviewDataType } from '@/domains/review/types/review';

export const selectedBadgeState = atom<SelectedBadgeType>({
  key: 'selectedBadge',
  default: {
    preference: undefined,
    taste: undefined,
    texture: undefined
  }
});

export const starRatingState = atom<RatingType>({
  key: 'starRating',
  default: 0
});

export const reviewContentState = atom<string>({
  key: 'reviewContent',
  default: ''
});

export const uploadImageUrlsState = atom<Array<string>>({
  key: 'uploadImageUrls',
  default: []
});

export const uploadImageFilesState = atom<Array<File>>({
  key: 'uploadImageFiles',
  default: []
});

export const isAllBadgeSelectedState = selector<boolean>({
  key: 'isAllBadgeSelected',
  get: ({ get }) => {
    const selectedBadge = get(selectedBadgeState);
    return Object.values(selectedBadge).every((badge) => badge);
  }
});

export const reviewDataState = selector<ReviewDataType>({
  key: 'reviewData',
  get: ({ get }) => ({
    badges: get(selectedBadgeState),
    rate: get(starRatingState),
    content: get(reviewContentState),
    photos: get(uploadImageUrlsState)
  }),
  set: ({ set }, data) => {
    if (data instanceof DefaultValue) return;

    const { badges, rate, content, photos } = data;
    set(selectedBadgeState, badges);
    set(starRatingState, rate);
    set(reviewContentState, content);
    set(uploadImageUrlsState, photos);
  }
});
