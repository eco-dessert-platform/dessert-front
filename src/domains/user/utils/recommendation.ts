import Dictionary from '@/shared/utils/dictionary';
import {
  PreferenceType,
  RecommendationStep2Type,
  RecommendationStep2ResultType
} from '@/domains/user/types/recommendation';

export const recommendationDictionary = new Dictionary({
  다이어트: 'DIET',
  근성장: 'MUSCLE_GROW',
  '체질•알러지': 'CONSTITUTION',
  '비건•채식': 'VEGAN',
  유당불내증: 'LACTOSE_INTOLERANCE',
  글루텐불내증: 'GLUTEN_INTOLERANCE',
  당뇨: 'DIABETES',
  여드름: 'PIMPLES',
  체지방: 'BODY_FAT',
  콜레스테롤: 'CHOLESTEROL',
  소화불량: 'DIGESTIVE_DISORDER',
  밀가루: 'FLOUR',
  통밀: 'WHOLE_WHEAT',
  쌀: 'RICE',
  콩: 'BEAN',
  우유: 'MILK',
  두유: 'SOY_MILK',
  설탕: 'SUGAR',
  계란: 'EGG',
  땅콩: 'PEANUT',
  호두: 'WALNUTS',
  잣: 'PINE_NUTS',
  복숭아: 'PEACH',
  토마토: 'TOMATO',
  과일: 'FRUIT',
  '동물성 재료': 'ANIMAL_INGREDIENT',
  유제품: 'DIARY',
  '동물의 알': 'ANIMAL_EGG',
  해산물: 'SEA_FOOD',
  육고기: 'MEAT',
  해당없음: 'NOT_APPLICABLE'
});

export const processKrArrayToEngString = (preferenceType: Array<PreferenceType>): string => {
  if (preferenceType.length === 0) {
    return 'NONE';
  }
  return preferenceType.map((ele) => recommendationDictionary.translate(ele)).join('_');
};

export const processEngStringToKrArray = (preferenceType: string): Array<PreferenceType> =>
  preferenceType
    .replace('MUSCLE_GROW', 'MUSCLE GROW')
    .split('_')
    .map((ele) => (ele === 'MUSCLE GROW' ? 'MUSCLE_GROW' : ele))
    .map((ele) => recommendationDictionary.translate(ele) as PreferenceType);

export const translateObjectValuesEngToKr = (recommendationStep2: RecommendationStep2ResultType) =>
  Object.keys(recommendationStep2).reduce(
    (result, key) => ({
      ...result,
      [key]: recommendationStep2[key as keyof RecommendationStep2Type].map((ele) =>
        recommendationDictionary.translate(ele)
      )
    }),
    {} as RecommendationStep2Type
  );

export const translateObjectValuesKrToEng = (recommendationStep2: RecommendationStep2Type) =>
  Object.keys(recommendationStep2).reduce(
    (result, key) => ({
      ...result,
      [key]: recommendationStep2[key as keyof RecommendationStep2Type].map((ele) =>
        recommendationDictionary.translate(ele)
      )
    }),
    {} as RecommendationStep2ResultType
  );
