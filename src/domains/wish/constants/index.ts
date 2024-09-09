import Dictionary from '@/shared/utils/dictionary';

export const SORT_OPTIONS = ['담은순', '인기순', '낮은 가격 순'];

export const DEFAULT_FOLDER_ID = 0;

export const wishSortDictionary = new Dictionary({
  '낮은 가격 순': 'LOW_PRICE',
  인기순: 'POPULAR',
  담은순: 'WISHLIST_RECENT'
});
