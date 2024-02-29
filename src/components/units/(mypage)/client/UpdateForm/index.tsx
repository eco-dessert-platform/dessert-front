'use client';

import Button from '@/components/commons/button/client/Button';
import BirthdayInput from '@/components/units/(mypage)/client/BirthdateInput';
import MoreSection from '@/components/units/(mypage)/Update/client/MoreSection';
import NicknameInput from '@/components/units/(mypage)/client/NickNameInput';
import PhoneNumberInput from '@/components/units/(mypage)/client/PhoneNumberInput';
import ProfileImageInput from '@/components/units/(mypage)/client/ProfileImageInput';
import { MyProfileResponse } from '../../Update/types';
import useProfileUpdateMutation from '../../Update/hooks/useProfileUpdateMutation';
import { useRecoilValue } from 'recoil';
import { updateFormState } from '../../atoms';
import { FormEventHandler } from 'react';

interface UpdateFormProps {
  defaultValues: MyProfileResponse;
}

const UpdateForm = ({ defaultValues }: UpdateFormProps) => {
  const { profileImg, nickname, phoneNumber, birthDate } = defaultValues;
  const { mutate } = useProfileUpdateMutation();
  const updateForm = useRecoilValue(updateFormState);

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    mutate(updateForm);
  };

  return (
    <form className="px-[16px]" onSubmit={onSubmit}>
      <div className="my-[16px] flex flex-col w-full justify-center items-center">
        <ProfileImageInput defaultValue={profileImg ?? undefined} />
      </div>
      <div className="flex flex-col gap-[20px] mb-[36px]">
        <NicknameInput defaultValue={nickname ?? undefined} />
        <PhoneNumberInput defaultValue={phoneNumber ?? undefined} />
        <BirthdayInput defaultValue={birthDate ?? undefined} />
      </div>
      <div>
        <MoreSection className="mb-[16px]" />
        <Button type="submit">수정하기</Button>
      </div>
    </form>
  );
};

export default UpdateForm;
