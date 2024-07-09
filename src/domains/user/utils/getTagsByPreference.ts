import { PreferenceType } from '@/domains/user/types/preference';

export const getTagsByPreference = (preference: PreferenceType) => {
  switch (preference) {
    case '다이어트':
      return ['저당', '저지방'];
    case '근성장':
      return ['고단백'];
    case '체질•알러지':
      return ['글루텐프리'];
    case '비건•채식':
      return ['비건'];
    default:
      return ['저당', '저지방'];
  }
};
