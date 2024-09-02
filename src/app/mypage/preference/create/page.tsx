'use client';

import PreferenceForm from '@/domains/user/components/PreferenceForm';
import { FORM_ID } from '@/domains/user/constants/form';
import useAddPreferenceMutation from '@/domains/user/queries/useAddPreferenceMutation';
import { PreferenceFormType } from '@/domains/user/types/preference';
import { SubmitHandler, useFormContext } from 'react-hook-form';

const PreferencePage = () => {
  const { handleSubmit } = useFormContext<PreferenceFormType>();
  const { mutate } = useAddPreferenceMutation();

  const onValid: SubmitHandler<PreferenceFormType> = ({ preferenceType }) => {
    const preferences = preferenceType.filter((value) => typeof value === 'string');
    mutate(preferences);
  };

  return <PreferenceForm id={FORM_ID.preferenceCreate} onSubmit={handleSubmit(onValid)} />;
};

export default PreferencePage;
