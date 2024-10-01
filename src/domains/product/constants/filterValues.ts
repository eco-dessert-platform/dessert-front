import { MAIN_CATEGORIES_TYPE } from '@/domains/product/constants/mainCategories';
import { LIMIT_MAX_PRICE, LIMIT_MIN_PRICE } from './priceLimit';

export const FILTER_VALUES = {
  category: {
    name: '카테고리',
    kind: {
      [MAIN_CATEGORIES_TYPE[0].title]: [
        ...MAIN_CATEGORIES_TYPE[1].subCategories.filter((subCategory) => subCategory !== '기타'),
        ...MAIN_CATEGORIES_TYPE[2].subCategories.slice(1),
        '기타'
      ],
      [MAIN_CATEGORIES_TYPE[1].title]: MAIN_CATEGORIES_TYPE[1].subCategories,
      [MAIN_CATEGORIES_TYPE[2].title]: MAIN_CATEGORIES_TYPE[2].subCategories
    }
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
    name: '주문가능상품만 보기'
  }
};

export const INIT_FILTER_VALUE = {
  category: '전체',
  tags: ['전체'],
  price: [LIMIT_MIN_PRICE, LIMIT_MAX_PRICE],
  sort: '추천순',
  orderAvailableToday: false
};
