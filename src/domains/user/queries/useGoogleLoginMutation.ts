import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';
import fetchExtend from '@/shared/utils/api';
import { redirect } from '@/shared/actions/redirect';
import { LoginResponse } from '../types/login';

const useGoogleLoginMutation = () => {
  const setLogin = useSetRecoilState(isLoggedinState);

  const mutationFn = async (code: string) => {
    const res = await fetchExtend.get(`/oauth2/login/callback/google?code=${code}`, {
      method: 'GET'
    });
    const data: LoginResponse = await res.json();
    if (!res.ok) throw Error('로그인 실패');
    return data;
  };

  const onSuccess = async () => {
    setLogin(true);
    await redirect('/');
  };

  return useMutation({
    mutationFn,
    onSuccess
  });
};

export default useGoogleLoginMutation;
