'use client';

import PreferenceForm from '@/domains/user/components/PreferenceForm';
import { FORM_ID } from '@/domains/user/constants/form';
import useUpdatePreferenceMutation from '@/domains/user/queries/useUpdatePreferenceMutation';
import { PreferenceFormType } from '@/domains/user/types/preference';
import { SubmitHandler, useFormContext } from 'react-hook-form';

const PreferenceUpdatePage = () => {
  const { handleSubmit } = useFormContext<PreferenceFormType>();
  const { mutate } = useUpdatePreferenceMutation();

  const onValid: SubmitHandler<PreferenceFormType> = ({ preferenceType }) => {
    const preferences = preferenceType.filter((value) => typeof value === 'string');
    mutate(preferences);
  };

  return <PreferenceForm id={FORM_ID.preferenceUpdate} onSubmit={handleSubmit(onValid)} />;
};

export default PreferenceUpdatePage;
