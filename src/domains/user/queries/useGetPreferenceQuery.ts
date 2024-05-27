import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { preferenceState } from '@/domains/user/atoms/profile';
import { preferenceQueryKey } from '@/domains/user/queries/queryKey';
import { PreferenceType } from '@/domains/user/types/profile';
import userService from '@/domains/user/queries/service';

const useGetPreferenceQuery = () => {
  const setPreference = useSetRecoilState(preferenceState);

  const queryKey = preferenceQueryKey.all;

  const queryFn = async () => {
    const data = await userService.getPreference();
    return data;
  };

  const select = useCallback(
    (data: string) => {
      const preferenceArr = data
        .toLowerCase()
        .replace('muscle_grow', 'muscle grow')
        .split('_') as Array<PreferenceType>;

      setPreference(preferenceArr);
    },
    [setPreference]
  );

  return useQuery({
    queryKey,
    queryFn,
    throwOnError: true,
    select
  });
};

export default useGetPreferenceQuery;
