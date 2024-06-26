'use client';

import { FormEvent } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { PreferenceType } from '@/domains/user/types/preference';
import DescriptionSection from '@/domains/user/components/PreferenceForm/DescriptionSection';
import CheckSection from '@/domains/user/components/PreferenceForm/CheckSection';
import ButtonSection from '@/domains/user/components/PreferenceForm/ButtonSection';

interface PreferenceFormProps {
  mutate: UseMutateFunction<void, Error, PreferenceType[], unknown>;
}

const PreferenceForm = ({ mutate }: PreferenceFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const preference = formData.getAll('preference') as Array<PreferenceType>;
    mutate(preference);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DescriptionSection />
      <CheckSection />
      <ButtonSection />
    </form>
  );
};

export default PreferenceForm;
