import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { ResultResponse } from '@/shared/types/response';
import { NicknameDoubleCheckResponse } from '../types/profile';

const useNicknameDoubleCheckMutation = () => {
  const mutationFn = async (nickname: string) => {
    const res = await fetchExtend.get(`/profile/doublecheck?nickname=${nickname}`);
    const { result, success, message }: ResultResponse<NicknameDoubleCheckResponse> =
      await res.json();
    if (!res.ok || !success) throw new Error(message);
    return result;
  };

  return useMutation({
    mutationFn
  });
};

export default useNicknameDoubleCheckMutation;
