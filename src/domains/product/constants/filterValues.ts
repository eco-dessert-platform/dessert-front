import { LIMIT_MAX_PRICE, LIMIT_MIN_PRICE } from '@/domains/product/constants/priceLimit';

export const FILTER_VALUES = {
  categories: ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'],
  tags: ['전체', '글루텐프리', '고단백', '비건', '무설탕', '키토제닉'],
  sorts: ['추천순', '찜 많은순', '리뷰 개수순', '만족도순', '최신순', '낮은 가격순', '높은 가격순']
};

export const INIT_FILTER_VALUE = {
  category: undefined,
  tags: undefined,
  price: [LIMIT_MIN_PRICE, LIMIT_MAX_PRICE],
  sort: '추천순',
  orderAvailableToday: false
};
