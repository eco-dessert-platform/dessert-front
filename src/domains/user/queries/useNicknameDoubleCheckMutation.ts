import { ResultResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';
import { useMutation } from '@tanstack/react-query';

import { NicknameDoubleCheckResponse } from '../types/profile';

const useNicknameDoubleCheckMutation = () => {
  const mutationFn = async (nickname: string) => {
    const res = await fetchExtend.get(`/profile/doublecheck?nickname=${nickname}`);
    const { result, success, message, code }: ResultResponse<NicknameDoubleCheckResponse> =
      await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }
    return result;
  };

  return useMutation({
    mutationFn
  });
};

export default useNicknameDoubleCheckMutation;
