'use client';

import Header from '@/shared/components/Header';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import RecommendForm from '@/domains/user/components/RecommendForm';

const Recommend = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: mutate 연결
  };

  return (
    <>
      <Header title="맞춤 추천 받기" />
      <PaddingWrapper>
        <RecommendForm onSubmit={handleSubmit} />
      </PaddingWrapper>
    </>
  );
};

export default Recommend;
