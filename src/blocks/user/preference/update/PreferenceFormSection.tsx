'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { preferenceState } from '@/domains/user/atoms/profile';
import { PreferenceType } from '@/domains/user/types/profile';
import useUpdatePreferenceMutation from '@/domains/user/queries/useUpdatePreferenceMutation';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PreferenceForm from '@/domains/user/components/PreferenceForm';

interface PreferenceFormSectionProps {
  data: Array<PreferenceType>;
}

const PreferenceFormSection = ({ data }: PreferenceFormSectionProps) => {
  const setPreference = useSetRecoilState(preferenceState);
  const { mutate } = useUpdatePreferenceMutation();

  useEffect(() => {
    setPreference(data);
  }, [setPreference, data]);

  return (
    <PaddingWrapper>
      <PreferenceForm mutate={mutate} />
    </PaddingWrapper>
  );
};

export default PreferenceFormSection;
