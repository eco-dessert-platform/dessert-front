import API from '@/api';
import { UserProfileType } from '../types';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';

export const fetchUserProfile = async () => {
  const data: UserProfileType = await API.get('/profile', {
    next: {
      tags: [REAVALIDATE_TAG.profile]
    }
  });
  return data;
};
