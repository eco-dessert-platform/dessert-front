'use client';

import Loading from '@/components/commons/Loading';
import useKakaoLoginMutation from '@/domains/user/queries/useKakaoLoginMutation';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

interface KakaoParams extends Params {
  error: string;
  code: string;
  error_description: string;
}

const KakaoLoginLoadingPage = () => {
  const { mutate } = useKakaoLoginMutation();
  const { code } = useParams<KakaoParams>();

  useEffect(() => {
    mutate(code);
  }, [code, mutate]);

  return <Loading />;
};

export default KakaoLoginLoadingPage;