import { useMutation } from '@tanstack/react-query';

import userService from './service';

const useNicknameDoubleCheckMutation = () => {
  const mutationFn = async (nickname: string) => {
    const result = await userService.getNickCheck(nickname);
    return result;
  };
  return useMutation({
    mutationFn
  });
};

export default useNicknameDoubleCheckMutation;
