'use client';

import { useFormContext } from 'react-hook-form';

import BirthdayInput from '@/domains/user/components/common/BirthdateInput';
import NicknameInput from '@/domains/user/components/common/NickNameInput';
import ProfileImageInput from '@/domains/user/components/common/ProfileImageInput';
import MoreSection from '@/domains/user/components/ProfileUpdateForm/MoreSection';
import useProfileUpdateMutation from '@/domains/user/queries/useProfileUpdateMutation';
import { MyProfileUpdateRequest, UserProfileType } from '@/domains/user/types/profile';

import { FORM_ID } from '../../constants/form';
import SexInput from '../common/SexInput';

const ProfileUpdateForm = () => {
  const { mutate } = useProfileUpdateMutation();
  const { handleSubmit } = useFormContext<MyProfileUpdateRequest>();

  const onSubmit = (data: UserProfileType) => {
    mutate(data);
  };

  return (
    <form id={FORM_ID.profileUpdate} className="px-[16px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="my-[16px] flex justify-center items-center">
        <ProfileImageInput />
      </div>
      <div className="flex flex-col gap-[20px] mb-[36px]">
        <NicknameInput />
        <SexInput />
        <BirthdayInput />
      </div>
      <MoreSection className="mb-[16px]" />
    </form>
  );
};

export default ProfileUpdateForm;
