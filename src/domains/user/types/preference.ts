export type PreferenceType = '다이어트' | '근성장' | '체질•알러지' | '비건•채식';

export interface PreferenceResultType {
  preferenceType: string;
}

export interface PreferenceFormType {
  preferenceType: Array<boolean | PreferenceType>;
}
