'use client';

import { RegistrationRequest } from '@/domains/user/types/profile';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues: RegistrationRequest;
}

const RegistrationFormProvider = ({ children, defaultValues }: Props) => {
  const methods = useForm<RegistrationRequest>({ defaultValues, mode: 'onChange' });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default RegistrationFormProvider;
