'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { preferenceState } from '@/domains/user/atoms/profile';
import useGetPreferenceQuery from '@/domains/user/queries/useGetPreferenceQuery';
import useUpdatePreferenceMutation from '@/domains/user/queries/useUpdatePreferenceMutation';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PreferenceForm from '@/domains/user/components/PreferenceForm';

const PreferenceFormSection = () => {
  const { data } = useGetPreferenceQuery();
  const { mutate } = useUpdatePreferenceMutation();
  const setPreference = useSetRecoilState(preferenceState);

  useEffect(() => {
    if (!data) return;
    setPreference(data);
  }, [setPreference, data]);

  return (
    <PaddingWrapper>
      <PreferenceForm mutate={mutate} />
    </PaddingWrapper>
  );
};

export default PreferenceFormSection;
