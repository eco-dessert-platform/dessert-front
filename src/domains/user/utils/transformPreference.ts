import { PreferenceType } from '@/domains/user/types/preference';

export const transformPreferenceToEng = (preference: string): string => {
  switch (preference) {
    case '다이어트':
      return 'diet';
    case '근성장':
      return 'muscle grow';
    case '체질•알러지':
      return 'constitution';
    case '비건•채식':
      return 'vegan';
    default:
      return 'diet';
  }
};

export const transformPreferenceToKr = (preference: string): string => {
  switch (preference) {
    case 'diet':
      return '다이어트';
    case 'muscle grow':
      return '근성장';
    case 'constitution':
      return '체질•알러지';
    case 'vegan':
      return '비건•채식';
    default:
      return '다이어트';
  }
};

export const transformDataToAtomFormat = (data: string) =>
  data
    .toLowerCase()
    .replace('muscle_grow', 'muscle grow')
    .split('_')
    .map((ele: string) => transformPreferenceToKr(ele)) as Array<PreferenceType>;
