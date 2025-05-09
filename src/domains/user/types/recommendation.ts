import { RECOMMENDATION } from '@/domains/user/constants/recommendation';

export type PreferenceType = (typeof RECOMMENDATION.step1.preferenceType)[number];

export type RecommendationStep1Type = {
  [K in keyof typeof RECOMMENDATION.step1]: Array<(typeof RECOMMENDATION.step1)[K][number]>;
};

export type RecommendationStep2Type = {
  [K in keyof typeof RECOMMENDATION.step2]: Array<(typeof RECOMMENDATION.step2)[K][number]>;
};

export interface RecommendationType {
  step1: RecommendationStep1Type;
  step2: RecommendationStep2Type;
}

export interface RecommendationStep1ResultType {
  preferenceType: string;
}

export interface RecommendationStep2ResultType {
  dietLimitation: Array<string>;
  healthConcerns: Array<string>;
  unmatchedIngredientList: Array<string>;
  isVegetarians: Array<string>;
}
