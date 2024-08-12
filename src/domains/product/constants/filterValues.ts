import { LIMIT_MAX_PRICE, LIMIT_MIN_PRICE } from './priceLimit';

export const FILTER_VALUES = {
  categories: [
    '전체',
    '식빵·모닝빵',
    '베이글·도넛',
    '케이크',
    '타르트·파이',
    '쿠키·비스킷·크래커',
    '과자',
    '잼·청',
    '아이스크림',
    '요거트',
    '그래놀라',
    '기타'
  ],
  tags: ['전체', '글루텐프리', '고단백', '비건', '저당', '저지방'],
  sorts: ['추천순', '찜 많은순', '리뷰 개수순', '만족도순', '최신순', '낮은 가격순', '높은 가격순']
};

export const INIT_FILTER_VALUE = {
  category: '',
  tags: null,
  price: [LIMIT_MIN_PRICE, LIMIT_MAX_PRICE],
  sort: '추천순',
  orderAvailableToday: false
};
