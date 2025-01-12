export function transformCategoryToEng(category: string): string {
  if (category === '전체') {
    return 'ALL';
  }
  if (category === '전체_빵') {
    return 'ALL_BREAD';
  }
  if (category === '전체_과자') {
    return 'ALL_SNACK';
  }
  if (category === '식빵·모닝빵') {
    return 'BREAD';
  }
  if (category === '베이글·도넛') {
    return 'BAGEL';
  }
  if (category === '케이크') {
    return 'CAKE';
  }
  if (category === '타르트·파이') {
    return 'TART';
  }
  if (category === '쿠키·비스킷·크래커') {
    return 'COOKIE';
  }
  if (category === '과자') {
    return 'SNACK';
  }
  if (category === '잼·청') {
    return 'JAM';
  }
  if (category === '아이스크림') {
    return 'ICE_CREAM';
  }
  if (category === '요거트') {
    return 'YOGURT';
  }
  if (category === '그래놀라') {
    return 'GRANOLA';
  }
  if (category === '기타') {
    return 'ETC';
  }
  return category;
}

export function transformTagToKr(tag: string): string {
  if (tag === 'glutenFree') {
    return '글루텐프리';
  }
  if (tag === 'highProtein') {
    return '고단백';
  }
  if (tag === 'vegan') {
    return '비건';
  }
  if (tag === 'sugarFree') {
    return '저당';
  }
  if (tag === 'ketogenic') {
    return '저지방';
  }
  return tag;
}

export function transformTagToEng(tag: string): string {
  if (tag === '글루텐프리') {
    return 'glutenFreeTag';
  }
  if (tag === '고단백') {
    return 'highProteinTag';
  }
  if (tag === '비건') {
    return 'veganTag';
  }
  if (tag === '저당') {
    return 'sugarFreeTag';
  }
  if (tag === '저지방') {
    return 'ketogenicTag';
  }
  return tag;
}

export function transformSortToEng(sort: string): string {
  if (sort === '추천순') {
    return 'RECOMMEND';
  }
  if (sort === '찜 많은순') {
    return 'MOST_WISHED';
  }
  if (sort === '리뷰 개수순') {
    return 'MOST_REVIEWED';
  }
  if (sort === '만족도순') {
    return 'HIGHEST_RATED';
  }
  if (sort === '최신순') {
    return 'RECENT';
  }
  if (sort === '낮은 가격순') {
    return 'LOW_PRICE';
  }
  if (sort === '높은 가격순') {
    return 'HIGH_PRICE';
  }
  return sort;
}

export const nutirentEngToKr = (item: string) => {
  switch (item) {
    case 'sugars':
      return '당류';
    case 'protein':
      return '단백질';
    case 'carbohydrates':
      return '탄수화물';
    case 'fat':
      return '지방';
    default:
      return '';
  }
};
