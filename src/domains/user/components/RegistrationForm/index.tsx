'use client';

import { FormEventHandler, useRef } from 'react';

import { useRecoilValue } from 'recoil';

import BirthdayInput from '@/domains/user/components/common/BirthdateInput';
import NicknameInput from '@/domains/user/components/common/NickNameInput';
import PhoneNumberInput from '@/domains/user/components/common/PhoneNumberInput';
import ButtonSection from '@/domains/user/components/RegistrationForm/ButtonSection';

import { registrationFormState } from '../../atoms/profile';
import useRegistrationMutation from '../../queries/useRegistrationMutation';
import GenderInput from '../common/GenderInput';
import ProfileImageInput from '../common/ProfileImageInput';
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
    <form ref={formRef} className="px-[16px]" onSubmit={onSubmit}>
      <div className="my-[16px] flex justify-center items-center">
        <ProfileImageInput />
      </div>
      <div className="flex flex-col gap-[20px] mb-[56px]">
        <NicknameInput />
        <GenderInput />
        <PhoneNumberInput />
        <BirthdayInput />
      </div>
      <CheckSection className="mb-[32px]" />
      <ButtonSection />
    </form>
  );
};

export default RegistrationForm;
