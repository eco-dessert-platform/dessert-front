export const RECOMMENDATION = {
  step1: { preferenceType: ['다이어트', '근성장', '체질•알러지', '비건•채식'] },
  step2: {
    dietLimitation: ['유당불내증', '글루텐불내증', '당뇨', '해당없음'],
    healthConcerns: ['여드름', '체지방', '콜레스테롤', '소화불량', '해당없음'],
    unmatchedIngredientList: [
      '밀가루',
      '통밀',
      '쌀',
      '콩',
      '우유',
      '두유',
      '설탕',
      '계란',
      '땅콩',
      '호두',
      '잣',
      '복숭아',
      '토마토',
      '해당없음'
    ],
    isVegetarians: ['과일', '동물성 재료', '유제품', '동물의 알', '해산물', '육고기']
  }
} as const;

export const RECOMMENDATION_PROVIDER_DEFAULT_VALUE = {
  step1: { preferenceType: [] },
  step2: {
    dietLimitation: [],
    healthConcerns: [],
    unmatchedIngredientList: [],
    isVegetarians: []
  }
};
