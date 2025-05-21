'use client';

import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import { ReactNode } from 'react';
import { REGISTRATION_DEFAULT_VALUE } from '@/domains/user/constants/profile';
import RegistrationFormProvider from './_blocks/RegistrationcFormProvider';
import ButtonSection from './_blocks/ButtonSection';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <RegistrationFormProvider defaultValues={REGISTRATION_DEFAULT_VALUE}>
    <DefaultLayout
      header={<Header title="프로필 등록" />}
      main={children}
      footer={<ButtonSection />}
    />
  </RegistrationFormProvider>
);

export default Layout;
