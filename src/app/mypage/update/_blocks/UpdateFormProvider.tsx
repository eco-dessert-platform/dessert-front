'use client';

import { UserProfileType } from '@/domains/user/types/profile';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues: UserProfileType;
}

const UpdateFormProvider = ({ children, defaultValues }: Props) => {
  const methods = useForm<UserProfileType>({ defaultValues, mode: 'onChange' });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default UpdateFormProvider;
