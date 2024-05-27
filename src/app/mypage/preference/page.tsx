'use client';

import useAddPreferenceMutation from '@/domains/user/queries/useAddPreferenceMutation';
import Header from '@/shared/components/Header';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PreferenceForm from '@/domains/user/components/PreferenceForm';

const PreferencePage = () => {
  const { mutate } = useAddPreferenceMutation();

  return (
    <>
      <Header title="맞춤 추천 받기" />
      <PaddingWrapper>
        <PreferenceForm mutate={mutate} />
      </PaddingWrapper>
    </>
  );
};

export default PreferencePage;
