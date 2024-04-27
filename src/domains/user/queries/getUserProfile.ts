import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { throwError } from '@/shared/utils/error';
import { UserProfileType } from '../types/profile';

const getUserProfile = async () => {
  const res = await fetchExtend.get('/profile', {
    next: {
      tags: [QUERY_KEY.profile]
    }
  });
  const { result, success, code, message }: ResultResponse<UserProfileType> = await res.json();
  if (!res.ok || !success) {
    throwError({ code, message });
  }
  return result;
};

export default getUserProfile;
