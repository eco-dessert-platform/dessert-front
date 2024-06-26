'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { preferenceState } from '@/domains/user/atoms/preference';
import useGetPreferenceQuery from '@/domains/user/queries/useGetPreferenceQuery';
import useUpdatePreferenceMutation from '@/domains/user/queries/useUpdatePreferenceMutation';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PreferenceForm from '@/domains/user/components/PreferenceForm';

const PreferenceFormSection = () => {
  const { data: preference } = useGetPreferenceQuery();
  const { mutate } = useUpdatePreferenceMutation();
  const setPreference = useSetRecoilState(preferenceState);

  useEffect(() => {
    if (!preference) return;
    setPreference(preference);
  }, [setPreference, preference]);

  return (
    <PaddingWrapper>
      <PreferenceForm mutate={mutate} />
    </PaddingWrapper>
  );
};

export default PreferenceFormSection;
