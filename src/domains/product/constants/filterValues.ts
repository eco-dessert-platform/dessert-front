import { LIMIT_MAX_PRICE, LIMIT_MIN_PRICE } from './priceLimit';

export const FILTER_VALUES = {
  category: {
    name: '카테고리',
    kind: [
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
    ]
  },
  tags: {
    name: '성분',
    kind: ['전체', '고단백', '저당', '저지방', '글루텐프리', '비건']
  },
  sorts: {
    name: '정렬',
    kind: ['추천순', '찜 많은순', '리뷰 개수순', '만족도순', '최신순', '낮은 가격순', '높은 가격순']
  },
  price: {
    name: '가격'
  },
  orderAvailableToday: {
    name: '오늘 주문 가능'
  }
};

export const INIT_FILTER_VALUE = {
  category: '',
  tags: null,
  price: [LIMIT_MIN_PRICE, LIMIT_MAX_PRICE],
  sort: '추천순',
  orderAvailableToday: false
};
