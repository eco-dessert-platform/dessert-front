import { PreferenceType } from '@/domains/user/types/preference';
import { getTagsByPreference } from '@/domains/user/utils/getTagsByPreference';

export const genGuidanceMessage = (preference: Array<PreferenceType>) => {
  switch (preference.length) {
    case 1:
      return `${preference[0]}를 위한 ${getTagsByPreference(preference[0]).join('/')} 상품을 모아봤어요!`;
    case 2:
      return `${preference[0]}를 위한 ${getTagsByPreference(preference[0]).join('/')} 상품과
      ${preference[1]}를 위한 ${getTagsByPreference(preference[1]).join('/')} 상품을 모아봤어요!`;
    default:
      return null;
  }
};
