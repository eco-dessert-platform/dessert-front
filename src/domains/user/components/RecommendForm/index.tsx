'use client';

import DescriptionSection from '@/domains/user/components/RecommendForm/DescriptionSection';
import CheckSection from '@/domains/user/components/RecommendForm/CheckSection';
import ButtonSection from '@/domains/user/components/RecommendForm/ButtonSection';

interface RecommendFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RecommendForm = ({ onSubmit }: RecommendFormProps) => (
  <form onSubmit={onSubmit}>
    <DescriptionSection />
    <CheckSection />
    <ButtonSection />
  </form>
);

export default RecommendForm;
