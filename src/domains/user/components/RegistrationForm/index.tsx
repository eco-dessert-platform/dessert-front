'use client';

import { FormProvider, useForm } from 'react-hook-form';

import BirthdayInput from '@/domains/user/components/common/BirthdateInput';
import NicknameInput from '@/domains/user/components/common/NickNameInput';

import { FORM_ID } from '../../constants/form';
import useRegistrationMutation from '../../queries/useRegistrationMutation';
import { RegistrationRequest } from '../../types/profile';
import ProfileImageInput from '../common/ProfileImageInput';
import SexInput from '../common/SexInput';
import CheckSection from './CheckSection';

const RegistrationForm = () => {
  const { mutate } = useRegistrationMutation();

  const methods = useForm({
    defaultValues: {
      nickname: '',
      birthDate: '',
      sex: '',
      isAllowingMarketing: false,
      isPersonalInfoConsented: false,
      isTermsOfServiceAccepted: false
    }
  });

  const onSubmit = (data: RegistrationRequest) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        id={FORM_ID.profileRegist}
        className="px-[16px]"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
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
    </FormProvider>
  );
};

export default RegistrationForm;
