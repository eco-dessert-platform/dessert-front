'use client';

import useGetPreferenceQuery from '@/domains/user/queries/useGetPreferenceQuery';
import useUpdatePreferenceMutation from '@/domains/user/queries/useUpdatePreferenceMutation';
import Header from '@/shared/components/Header';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PreferenceForm from '@/domains/user/components/PreferenceForm';
import Loading from '@/shared/components/Loading';

const PreferenceUpdatePage = () => {
  const { isLoading } = useGetPreferenceQuery();
  const { mutate } = useUpdatePreferenceMutation();

  if (isLoading) return <Loading />;

  return (
    <>
      <Header title="맞춤 추천 수정하기" back />
      <PaddingWrapper>
        <PreferenceForm mutate={mutate} />
      </PaddingWrapper>
    </>
  );
};

export default PreferenceUpdatePage;
