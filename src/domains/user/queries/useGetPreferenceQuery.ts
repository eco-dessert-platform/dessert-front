import { useQuery } from '@tanstack/react-query';
import { preferenceQueryKey } from '@/domains/user/queries/queryKey';
import { PreferenceType } from '@/domains/user/types/profile';
import userService from '@/domains/user/queries/service';

const useGetPreferenceQuery = () => {
  const queryKey = preferenceQueryKey.all;

  const queryFn = async () => {
    const data = await userService.getPreference();
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    throwOnError: true,
    select: (data: string) => {
      const preferenceArr = data
        .toLowerCase()
        .replace('muscle_grow', 'muscle grow')
        .split('_') as Array<PreferenceType>;

      return preferenceArr;
    }
  });
};

export default useGetPreferenceQuery;
