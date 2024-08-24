export function transformCategoryToEng(tag: string): string {
  if (tag === '전체') {
    return '';
  }
  if (tag === '빵') {
    return 'BREAD';
  }
  if (tag === '쿠키') {
    return 'COOKIE';
  }
  if (tag === '케이크') {
    return 'CAKE';
  }
  if (tag === '타르트') {
    return 'TART';
  }
  if (tag === '잼/청') {
    return 'JAM';
  }
  if (tag === '요거트') {
    return 'YOGURT';
  }
  if (tag === '기타') {
    return 'ETC';
  }
  return tag;
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
    return '무설탕';
  }
  if (tag === 'ketogenic') {
    return '키토제닉';
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
  if (tag === '무설탕') {
    return 'sugarFreeTag';
  }
  if (tag === '키토제닉') {
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
