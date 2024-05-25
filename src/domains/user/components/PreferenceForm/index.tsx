'use client';

import DescriptionSection from '@/domains/user/components/PreferenceForm/DescriptionSection';
import CheckSection from '@/domains/user/components/PreferenceForm/CheckSection';
import ButtonSection from '@/domains/user/components/PreferenceForm/ButtonSection';

interface PreferenceFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PreferenceForm = ({ onSubmit }: PreferenceFormProps) => (
  <form onSubmit={onSubmit}>
    <DescriptionSection />
    <CheckSection />
    <ButtonSection />
  </form>
);

export default PreferenceForm;
