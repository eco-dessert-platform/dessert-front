'use client';

import { FormEventHandler, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import BirthdayInput from '@/domains/user/components/common/BirthdateInput';
import NicknameInput from '@/domains/user/components/common/NickNameInput';
import PhoneNumberInput from '@/domains/user/components/common/PhoneNumberInput';
import { registrationFormState } from '../../atoms/profile';
import useRegistrationMutation from '../../queries/useRegistrationMutation';
import ProfileImageInput from '../common/ProfileImageInput';
import CheckSection from './CheckSection';
import ButtonSection from './ButtonSection';

const RegistrationForm = () => {
  const registrationForm = useRecoilValue(registrationFormState);
  const { mutate } = useRegistrationMutation();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    mutate(registrationForm);
    e.preventDefault();
  };

  return (
    <form
      ref={formRef}
      className="px-[16px] flex flex-col items-center gap-[36px]"
      onSubmit={onSubmit}
    >
      <div className="w-full flex flex-col gap-[20px] items-center">
        <ProfileImageInput />
        <NicknameInput />
        <PhoneNumberInput />
        <BirthdayInput />
        <CheckSection />
      </div>

      <ButtonSection />
    </form>
  );
};

export default RegistrationForm;
