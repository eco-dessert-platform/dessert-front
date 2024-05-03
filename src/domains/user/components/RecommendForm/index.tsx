'use client';

import DescriptionSection from '@/domains/user/components/RecommendForm/DescriptionSection';
import CheckSection from '@/domains/user/components/RecommendForm/CheckSection';
import ButtonSection from '@/domains/user/components/RecommendForm/ButtonSection';

const RecommendForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: mutate 연결
  };

  return (
    <form onSubmit={handleSubmit}>
      <DescriptionSection />
      <CheckSection />
      <ButtonSection />
    </form>
  );
};

export default RecommendForm;
