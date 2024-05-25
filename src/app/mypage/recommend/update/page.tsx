'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { personalizedRecommendationState } from '@/domains/user/atoms/profile';
import Header from '@/shared/components/Header';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import RecommendForm from '@/domains/user/components/RecommendForm';

const RECOMMEND_DATA = {
  isDiet: true,
  isMuscle: true,
  isHealth: false,
  isVegan: false
};

const RecommendUpdate = () => {
  // TODO: RECOMMEND_DATA 대신 useGetRecommendQuery를 통해 actual data 가져오기
  const setRecommend = useSetRecoilState(personalizedRecommendationState);

  useEffect(() => {
    setRecommend(RECOMMEND_DATA);
  }, [setRecommend]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: mutate 연결
  };

  return (
    <>
      <Header title="맞춤 추천 수정하기" back />
      <PaddingWrapper>
        <RecommendForm onSubmit={handleSubmit} />
      </PaddingWrapper>
    </>
  );
};

export default RecommendUpdate;
