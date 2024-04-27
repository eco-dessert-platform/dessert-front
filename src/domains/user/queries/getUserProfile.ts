import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { UserProfileType } from '../types/profile';

const getUserProfile = async () => {
  const res = await fetchExtend.get('/profile', {
    next: {
      tags: [QUERY_KEY.profile]
    }
  });
  const { result, success, message }: ResultResponse<UserProfileType> = await res.json();
  if (!res.ok || !success) throw new Error(message);
  return result;
};

export default getUserProfile;
