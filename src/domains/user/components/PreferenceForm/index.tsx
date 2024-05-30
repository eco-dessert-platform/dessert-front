'use client';

import { FormEvent } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { PreferenceType } from '@/domains/user/types/profile';
import DescriptionSection from '@/domains/user/components/PreferenceForm/DescriptionSection';
import CheckSection from '@/domains/user/components/PreferenceForm/CheckSection';
import ButtonSection from '@/domains/user/components/PreferenceForm/ButtonSection';

interface PreferenceFormProps {
  mutate: UseMutateFunction<void, Error, PreferenceType[], unknown>;
}

const isPreferenceTypeArray = (values: FormDataEntryValue[]): values is PreferenceType[] =>
  values.every((value) => (typeof value) in Array<PreferenceType>);

const PreferenceForm = ({ mutate }: PreferenceFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const preference = formData.getAll('preference');
    if (isPreferenceTypeArray(preference)) {
      mutate(preference);
    }
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
