import ProductCategoryIcons from '@/shared/components/icons/ProductCategoryIcons';

export const MAIN_CATEGORIES_TYPE = [
  {
    id: 0,
    icon: <ProductCategoryIcons shape="all" />,
    title: '전체',
    subCategories: []
  },
  {
    id: 1,
    icon: <ProductCategoryIcons shape="bread" />,
    title: '빵',
    subCategories: ['전체보기', '식빵ㆍ모닝빵', '베이글ㆍ도넛', '케이크ㆍ파이']
  },
  {
    id: 2,
    icon: <ProductCategoryIcons shape="cookie" />,
    title: '간식/과자',
    subCategories: [
      '전체보기',
      '쿠키ㆍ비스킷ㆍ크래커',
      '과자',
      '쨈ㆍ청',
      '아이스크림',
      '요거트',
      '기타'
    ]
  }
];
