import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { isLoggedinState } from '@/shared/atoms/login';
import userService from '@/domains/user/queries/service';
import { preferenceQueryKey } from '@/domains/user/queries/queryKey';
import { PreferenceType } from '@/domains/user/types/preference';
import { transformPreferenceToKr } from '@/domains/user/utils/transformPreference';

const useGetPreferenceQuery = () => {
  const isLoggedIn = useRecoilValue(isLoggedinState);

  const queryKey = preferenceQueryKey.all;

  const queryFn = async () => {
    const data = await userService.getPreference();
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    select: (data) =>
      data
        .toLowerCase()
        .replace('muscle_grow', 'muscle grow')
        .split('_')
        .map((ele: string) => transformPreferenceToKr(ele)) as Array<PreferenceType>,
    enabled: isLoggedIn
  });
};

export default useGetPreferenceQuery;
