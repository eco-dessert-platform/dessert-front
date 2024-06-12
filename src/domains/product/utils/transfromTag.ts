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
  if (sort === '인기순') {
    return 'POPULAR';
  }
  return sort;
}

export function transformDayTag(tag: string): string {
  if (tag === 'friday') {
    return '금';
  }
  if (tag === 'monday') {
    return '월';
  }
  if (tag === 'saturday') {
    return '토';
  }
  if (tag === 'sunday') {
    return '일';
  }
  if (tag === 'thursday') {
    return '목';
  }
  if (tag === 'tuesday') {
    return '화';
  }
  if (tag === 'wednesday') {
    return '수';
  }
  return tag;
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
