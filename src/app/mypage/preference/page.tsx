'use client';

import Header from '@/shared/components/Header';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PreferenceForm from '@/domains/user/components/PreferenceForm';

const PreferencePage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: mutate 연결
  };

  return (
    <>
      <Header title="맞춤 추천 받기" />
      <PaddingWrapper>
        <PreferenceForm onSubmit={handleSubmit} />
      </PaddingWrapper>
    </>
  );
};

export default PreferencePage;
