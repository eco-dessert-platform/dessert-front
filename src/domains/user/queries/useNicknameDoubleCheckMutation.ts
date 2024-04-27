import { useMutation } from '@tanstack/react-query';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
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
