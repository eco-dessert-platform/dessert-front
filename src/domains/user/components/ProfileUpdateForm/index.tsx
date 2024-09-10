'use client';

import { FormEventHandler } from 'react';

import { useRecoilValue } from 'recoil';

import { updateFormState } from '@/domains/user/atoms/profile';
import BirthdayInput from '@/domains/user/components/common/BirthdateInput';
import NicknameInput from '@/domains/user/components/common/NickNameInput';
import ProfileImageInput from '@/domains/user/components/common/ProfileImageInput';
import ButtonSection from '@/domains/user/components/ProfileUpdateForm/ButtonSection';
import MoreSection from '@/domains/user/components/ProfileUpdateForm/MoreSection';
import useProfileUpdateMutation from '@/domains/user/queries/useProfileUpdateMutation';
import { UserProfileType } from '@/domains/user/types/profile';

import SexInput from '../common/SexInput';

interface ProfileUpdateFormProps {
  defaultValues: UserProfileType;
}

const ProfileUpdateForm = ({
  defaultValues: { profileImg, nickname, birthDate }
}: ProfileUpdateFormProps) => {
  const { mutate } = useProfileUpdateMutation();
  const updateForm = useRecoilValue(updateFormState);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    mutate(updateForm);
    e.preventDefault();
  };

  return (
    <form className="px-[16px]" onSubmit={onSubmit}>
      <div className="my-[16px] flex justify-center items-center">
        <ProfileImageInput defaultValue={profileImg ?? undefined} />
      </div>
      <div className="flex flex-col gap-[20px] mb-[36px]">
        <NicknameInput defaultValue={nickname ?? undefined} />
        <SexInput />
        <BirthdayInput defaultValue={birthDate ?? undefined} />
      </div>
      <MoreSection className="mb-[16px]" />
      <ButtonSection />
    </form>
  );
};

export default ProfileUpdateForm;
