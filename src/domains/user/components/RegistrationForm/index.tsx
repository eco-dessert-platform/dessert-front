'use client';

import { FormEventHandler, useRef } from 'react';

import { useRecoilValue } from 'recoil';

import BirthdayInput from '@/domains/user/components/common/BirthdateInput';
import NicknameInput from '@/domains/user/components/common/NickNameInput';

import { registrationFormState } from '../../atoms/profile';
import { FORM_ID } from '../../constants/form';
import useRegistrationMutation from '../../queries/useRegistrationMutation';
import ProfileImageInput from '../common/ProfileImageInput';
import SexInput from '../common/SexInput';
import CheckSection from './CheckSection';

const RegistrationForm = () => {
  const registrationForm = useRecoilValue(registrationFormState);
  const { mutate } = useRegistrationMutation();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    mutate(registrationForm);
    e.preventDefault();
  };

  return (
    <form id={FORM_ID.profileRegist} ref={formRef} className="px-[16px]" onSubmit={onSubmit}>
      <div className="my-[16px] flex justify-center items-center">
        <ProfileImageInput />
      </div>
      <div className="flex flex-col gap-[20px] mb-[56px]">
        <NicknameInput />
        <SexInput />
        <BirthdayInput />
      </div>
      <CheckSection className="mb-[32px]" />
    </form>
  );
};

export default RegistrationForm;
