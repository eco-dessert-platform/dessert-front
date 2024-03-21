import { useMutation } from '@tanstack/react-query';
import API from '@/api';
import { NicknameDoubleCheckResponse } from '../Update/types';

const useNicknameDoubleCheckMutation = () => {
  const mutationFn = async (nickname: string) => {
    const data: NicknameDoubleCheckResponse = await API.get(
      `/profile/doublecheck?nickname=${nickname}`
    );
    return data;
  };

  return useMutation({
    mutationFn
    // onSuccess,
    // onError
  });
};

export default useNicknameDoubleCheckMutation;
