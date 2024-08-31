'use client';

import useAddPreferenceMutation from '@/domains/user/queries/useAddPreferenceMutation';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PreferenceForm from '@/domains/user/components/PreferenceForm';

const PreferencePage = () => {
  const { mutate } = useAddPreferenceMutation();

  return (
    <PaddingWrapper>
      <PreferenceForm mutate={mutate} />
    </PaddingWrapper>
  );
};

export default PreferencePage;
