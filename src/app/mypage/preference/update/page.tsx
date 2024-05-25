'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { preferenceState } from '@/domains/user/atoms/profile';
import Header from '@/shared/components/Header';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PreferenceForm from '@/domains/user/components/PreferenceForm';

const PREFERENCE_DATA = {
  isDiet: true,
  isMuscle: true,
  isHealth: false,
  isVegan: false
};

const PreferenceUpdatePage = () => {
  // TODO: PREFERENCE_DATA 대신 useGetPreferenceQuery를 통해 actual data 가져오기
  const setPreference = useSetRecoilState(preferenceState);

  useEffect(() => {
    setPreference(PREFERENCE_DATA);
  }, [setPreference]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: mutate 연결
  };

  return (
    <>
      <Header title="맞춤 추천 수정하기" back />
      <PaddingWrapper>
        <PreferenceForm onSubmit={handleSubmit} />
      </PaddingWrapper>
    </>
  );
};

export default PreferenceUpdatePage;
